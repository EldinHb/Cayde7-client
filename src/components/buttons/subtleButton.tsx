import styled from "@emotion/styled";
import { Button, ButtonProps } from "./button";

export const SubtleButton = (props: ButtonProps) => {
	return (
		<StyledButton {...props} />
	)
}

const StyledButton = styled(Button)(props => {
	const { theme } = props;
	const { colorScheme, colors } = theme;

	return {
		borderColor: colorScheme === 'dark' ? colors.darkBlueContrast : colors.lightGray,
		backgroundColor: colorScheme === 'dark' ? colors.darkBlue : 'white'
	}
})