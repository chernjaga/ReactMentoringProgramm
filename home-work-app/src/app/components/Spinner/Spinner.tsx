import styled, { DefaultTheme, Keyframes, keyframes, StyledComponent, ThemeProps } from 'styled-components';

type SpinnerProps = {
    size: number
};

const rotate: Keyframes = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const spinnerWidthScale: number = 0.25;

export const Spinner: StyledComponent<'div', {}, SpinnerProps> = styled.div`
    animation: rotate;
    display: inline-block;
    border: ${(props: SpinnerProps): number => props.size * spinnerWidthScale}px dotted ${({ theme }: ThemeProps<DefaultTheme>) => theme.constants.spinnerColors.secondary};
    border-top: ${(props: SpinnerProps): number => props.size * spinnerWidthScale}px solid ${({ theme }: ThemeProps<DefaultTheme>) => theme.constants.spinnerColors.primary};
    border-radius: 50%;
    width: ${(props: SpinnerProps): number => props.size}px;
    height: ${(props: SpinnerProps): number => props.size}px;
    animation: ${rotate} 1s linear infinite;
`;