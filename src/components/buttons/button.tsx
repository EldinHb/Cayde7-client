import styled from "@emotion/styled";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { hexToRgb } from "styles/colors";

export type ButtonProps = {
	htmlProps?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
	children?: ReactNode;
	color?: string;
	onClick?: () => void;
	className?: string;
};

export const Button = (props: ButtonProps) => {
	return (
		<StyledButton
			{...props.htmlProps}
			onClick={props.onClick}
			color={props.color}
			className={props.className}
		>
			{
				props.children
			}
		</StyledButton>
	);
}

type StyledButtonProps = {
	color?: string;
}

const StyledButton = styled.button<StyledButtonProps>(props => {
	const { theme, color } = props;
	const { colors } = theme;

	const rgbPrimary = hexToRgb(colors.primaryDark);
	const rgbaPrimary = `rgb(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, .6)`;

	return {
		padding: '7px',
		borderRadius: '5px',
		border: '1px solid ' + colors.primary,
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: color || rgbaPrimary,
		':active': {
			opacity: '.7'
		}
	}
})