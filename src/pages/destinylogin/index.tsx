import { error } from "console";
import { GetServerSideProps } from "next";

type Props = {
	error: boolean;
	errorMessage?: string;
}

const DestinyLogin = (props: Props) => {
	return (
		<div>
			Destiny login
			{
				props.errorMessage
			}
		</div>
	);
}

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

	return {
		props: {
			error: false,
		}
	}
}

const getCredentials = () => {
	const clientId = process.env['DESTINY_CLIENT_ID'];
	const clientSecret = process.env['DESTINY_CLIENT_SECRET'];
	const apiKey = process.env['DESTINY_API_KEY'];

	if (!clientId || !clientSecret || !apiKey) {
		throw error(500, 'env is not filled with destiny credentials...');
	}

	return {
		clientId,
		clientSecret,
		apiKey
	};
}

export default DestinyLogin;