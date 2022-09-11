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
		padding: '80px 30px 20px 30px',
		minHeight: 'calc(100vh - 60px)',
		display: 'flex'
	}
})