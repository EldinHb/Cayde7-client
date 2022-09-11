import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconMoonStars, IconSunHigh } from '@tabler/icons';
import { SubtleButton } from 'components/buttons/subtleButton';

type Props = {
	title?: string;
}

export const Header = (props: Props) => {
	const { toggleColorScheme, colorScheme, colors } = useTheme();

	return (
		<StyledHeader>
			<Title>
				Cayde-7
			</Title>
			<SubtleButton onClick={toggleColorScheme}>
				{
					colorScheme === 'light' ?
						<IconMoonStars size={14} strokeWidth={2} color={colors.darkBlue} /> :
						<IconSunHigh size={14} strokeWidth={3} color={colors.gold} />
				}
			</SubtleButton>
		</StyledHeader>
	);
}

const StyledHeader = styled.nav(props => {
	const { theme: { colorScheme, colors } } = props;

	return {
		backgroundColor: colorScheme === 'dark' ? colors.darkBlue : 'white',
		display: 'flex',
		padding: '20px 30px',
		justifyContent: 'space-between',
		position: 'sticky',
		width: '100%',
		borderBottom: '1px solid ' + (colorScheme === 'dark' ? colors.darkBlueContrast : colors.lightGray)
	}
});

const Title = styled.div(({ theme: { colors } }) => {
	return {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: colors.primary
	}
})