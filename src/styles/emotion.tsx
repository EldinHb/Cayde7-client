import { ThemeProvider } from "@emotion/react";
import { ReactNode, useState } from "react";
import { Theme } from "./themes";

type Props = {
	children?: ReactNode;
}

export const EmotionProvider = (props: Props) => {
	const [theme, setTheme] = useState<Theme>('dark')

	const toggleColorScheme = () => {
		setTheme(e => e === 'dark' ? 'light' : 'dark');
	}

	return (
		<ThemeProvider theme={{
			toggleColorScheme,
			colorScheme: theme,
			colors: {
				darkBlue: '#12171c',
				darkBlueContrast: '#242f38',
				gold: '#e8c425',
				lightGray: '#e9e9e9',
				primary: '#ed39fa',
				primaryDark: '#ab3db3'
			}
		}}>
			{
				props.children
			}
		</ThemeProvider>
	);
}