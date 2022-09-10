import { useTheme } from 'hooks/useTheme';
import styles from './header.module.css';

type Props = {
	title?: string;
}

export const Header = (props: Props) => {
	const theme = useTheme();

	return (
		<nav className={styles['header-root']}>
			hello
			<button onClick={() => theme.toggleTheme()}>
				theme switch
			</button>
		</nav>
	);
}