import { ThemeProps, DefaultTheme } from 'styled-components';

export type ThemeHandler = ({ theme }: ThemeProps<DefaultTheme>) => string;
