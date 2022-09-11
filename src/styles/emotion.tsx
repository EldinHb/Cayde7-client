import { ThemeProvider } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import { isBrowser } from "utils/browser";
import { Theme } from "./themes";

type Props = {
	children?: ReactNode;
}

const themeKey = 'cayde7-theme-key';

export const EmotionProvider = (props: Props) => {
	const [theme, setTheme] = useState<Theme>('dark');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setTheme(localStorage.getItem(themeKey) as Theme || 'dark');
		setMounted(true);
	}, []);

	const toggleColorScheme = () => {
		setTheme(e => {
			const newTheme = e === 'dark' ? 'light' : 'dark';

			if (isBrowser()) {
				localStorage.setItem(themeKey, newTheme);
			}

			return newTheme;
		});
	}

	if (!mounted) {
		return <></>;
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