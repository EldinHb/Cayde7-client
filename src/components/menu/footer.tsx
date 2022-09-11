import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
	title?: string;
}

export const Footer = (props: Props) => {
	const { toggleColorScheme, colorScheme, colors } = useTheme();

	return (
		<Styledfooter>
			<MadeBy>
				Made by Eldin Habibovic
			</MadeBy>
		</Styledfooter>
	);
}

const Styledfooter = styled.footer(props => {
	const { theme: { colorScheme, colors } } = props;

	return {
		backgroundColor: colorScheme === 'dark' ? colors.darkBlueContrast : colors.lightGray,
		display: 'flex',
		padding: '0 30px',
		height: '60px',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center'
	}
});

const MadeBy = styled.div(() => {
	return {
		fontSize: '.75rem'
	}
})