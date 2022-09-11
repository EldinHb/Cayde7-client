import styled from "@emotion/styled";
import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
}

export const Page = (props: Props) => {
	return (
		<StyledPage>
			{
				props.children
			}
		</StyledPage>
	)
}

const StyledPage = styled.main(() => {
	return {
		padding: '20px 30px',
		backgroundColor: 'red',
		flex: '1'
	}
})