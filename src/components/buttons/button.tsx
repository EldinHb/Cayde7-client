import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, useMemo } from "react";
import { css } from "utils/css";
import styles from './button.module.css';

export type ButtonProps = {
	htmlProps?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
	children?: ReactNode;
	color?: 'primary' | 'secondary';
};

export const Button = (props: ButtonProps) => {
	const colorPalette = useMemo(() => {
		return styles['button-' + (props.color ? props.color : 'primary')];
	}, [props.color]);

	const classNames = useMemo(() => {
		return css(styles['button-root'], colorPalette, props.htmlProps?.className);
	}, [colorPalette, props.htmlProps]);

	return (
		<button
			{...props.htmlProps}
			className={classNames}
		>
			{
				props.children
			}
		</button>
	)
}