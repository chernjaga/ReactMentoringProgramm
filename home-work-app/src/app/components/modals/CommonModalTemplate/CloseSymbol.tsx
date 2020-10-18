import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

type CloseSymbolProps = {
    onClick: (event: React.MouseEvent) => void;
    className?: string;
};

const CloseSymbolWrapper: React.FC<CloseSymbolProps> = ({
    className,
    onClick,
}: CloseSymbolProps) => (
    <span className={className} onClick={onClick}>
        +
    </span>
);

export const CloseSymbol: StyledComponent<React.FC<CloseSymbolProps>, DefaultTheme> = styled(
    CloseSymbolWrapper
)`
    transform: rotateZ(45deg);
    display: inline-block;
    cursor: pointer;
    &:hover {
        color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.colors.pink};
    }
`;
