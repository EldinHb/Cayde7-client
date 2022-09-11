import '@emotion/react';
import { Color } from 'styles/colors';

export type ColorScheme = 'light' | 'dark';
export type ThemeColors = {
	[key in Color]: string;
}

declare module '@emotion/react' {
	export interface Theme {
		colorScheme: ColorScheme;
		colors: ThemeColors;
		toggleColorScheme: () => void;
	}
}