import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IconBrandGithub, IconMoonStars, IconSunHigh } from '@tabler/icons';
import { SubtleButton } from 'components/buttons/subtleButton';
import Link from 'next/link';

export const Header = () => {
	const { toggleColorScheme, colorScheme, colors } = useTheme();

	const onGithubClick = () => {
		window.open('https://github.com/EldinHb/Cayde7-server', '__blank');
	}

	return (
		<StyledHeader>
			<Title>
				<Link href={'/'}>
					Cayde-7
				</Link>
			</Title>
			<ButtonContainer>
				<SubtleButton onClick={toggleColorScheme}>
					{
						colorScheme === 'light' ?
							<IconMoonStars size={14} strokeWidth={2} color={colors.darkBlue} /> :
							<IconSunHigh size={14} strokeWidth={3} color={colors.gold} />
					}
				</SubtleButton>
				<SubtleButton onClick={onGithubClick}>
					<IconBrandGithub size={14} strokeWidth={2} />
				</SubtleButton>
			</ButtonContainer>
		</StyledHeader>
	);
}

const ButtonContainer = styled.div(() => {
	return {
		display: 'flex',
		gap: '10px'
	}
})

const StyledHeader = styled.nav(props => {
	const { theme: { colorScheme, colors } } = props;

	return {
		backgroundColor: colorScheme === 'dark' ? colors.darkBlue : 'white',
		display: 'flex',
		padding: '0 30px',
		height: '60px',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'fixed',
		width: '100%',
		borderBottom: '1px solid ' + (colorScheme === 'dark' ? colors.darkBlueContrast : colors.lightGray)
	}
});

const Title = styled.div(({ theme: { colors } }) => {
	return {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: colors.primary,
		cursor: 'pointer',
		'a': {
			textDecoration: 'none'
		}
	}
})