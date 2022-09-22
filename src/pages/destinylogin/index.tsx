import styled from "@emotion/styled";
import axios, { AxiosError } from "axios";
import { Agent } from "https";
import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { Env } from "utils/env";

type Props = {
	error: boolean;
	errorMessage?: string;
}

const DestinyLogin = (props: Props) => {
	return (
		<Container>
			{
				props.error ?
					<>
						<LoginText>
							Login unsuccessfull. Error: {props.errorMessage}
						</LoginText>
					</> :
					<>
						<LoginText>
							Login successfull!
						</LoginText>
						<div>
							You can now use the commands that need authentication. <Link href={'/'}>Click here</Link> to see a list of commands.
						</div>
					</>
			}
		</Container>
	);
};

const LoginText = styled.span(({ theme: { colors } }) => {
	return {
		fontSize: '1.875rem',
		fontWeight: 'bold',
		color: colors.primary
	}
})

const Container = styled.div(() => {
	return {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

type Query = {
	code: string;
	state: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
	const query = context.query as Query;

	if (!query.code || !query.state) {
		return {
			props: {
				error: true,
				errorMessage: 'Code or state is missing.'
			}
		}
	}

	const data = new URLSearchParams();
	data.append("grant_type", "authorization_code");
	data.append("code", query.code);

	const cred = getCredentials();

	const result = await fetch(
		"https://www.bungie.net/Platform/App/OAuth/token/",
		{
			body: data,
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization:
					`Basic ${Buffer.from(cred.clientId + ':' + cred.clientSecret).toString('base64')}`,
				"X-API-Key": cred.apiKey,
			},
		}
	);

	if (!result.ok) {
		return {
			props: {
				error: true,
				errorMessage: 'Login failed: ' + result.statusText
			}
		}
	}

	const loginData = await result.json();

	try {
		await axios(Env.ApiUrl + '/api/login', {
			data: JSON.stringify({
				userId: query.state,
				membershipId: loginData.membership_id,
				refreshToken: loginData.refresh_token,
				accessToken: loginData.access_token,
				refreshExpiresIn: loginData.refresh_expires_in,
				tokenExpiresIn: loginData.expires_in
			}),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			httpsAgent: new Agent({
				rejectUnauthorized: false
			})
		});
	} catch (err) {
		const axiosErr: AxiosError = err as any;
		return {
			props: {
				error: true,
				errorMessage: axiosErr.message
			}
		}
	}

	return {
		props: {
			error: false,
		}
	}
}

const botLogin = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {

}

const getCredentials = () => {
	const clientId = process.env['DESTINY_CLIENT_ID'];
	const clientSecret = process.env['DESTINY_CLIENT_SECRET'];
	const apiKey = process.env['DESTINY_API_KEY'];

	if (!clientId || !clientSecret || !apiKey) {
		throw Error('env is not filled with destiny credentials...');
	}

	return {
		clientId,
		clientSecret,
		apiKey
	};
}

export default DestinyLogin;