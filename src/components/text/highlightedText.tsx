import styled from "@emotion/styled";

export const HighlightedText = styled.span(({ theme: { colors } }) => {
	return {
		color: colors.primary
	};
});