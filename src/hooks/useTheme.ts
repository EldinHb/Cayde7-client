
export const useTheme = () => {
	const toggleTheme = () => {
		const theme = document.documentElement.getAttribute('data-theme');
		if (theme && theme === 'dark-theme') {
			document.documentElement.setAttribute('data-theme', 'light-theme');
		} else {
			document.documentElement.setAttribute('data-theme', 'dark-theme');
		}
	}

	return {
		toggleTheme,
		theme: document.documentElement.getAttribute('data-theme')
	};
};