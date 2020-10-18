import styled, { DefaultTheme, StyledComponent, ThemeProps } from 'styled-components';

type LogoProps = {
    className?: string;
};

export const LogoComponent: React.FC<LogoProps> = ({ className }: LogoProps) => (
    <h1 className={className}>
        <span>netflix</span>roulette
    </h1>
);

export const Logo: StyledComponent<React.FC<LogoProps>, DefaultTheme> = styled(LogoComponent)`
    color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.constants.logoColors.primary};
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 1.5rem;
    cursor: default;
    span {
        color: ${({ theme }: ThemeProps<DefaultTheme>): string =>
            theme.constants.logoColors.secondary};
        font-weight: 900;
    }
`;
