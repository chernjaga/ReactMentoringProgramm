import { createGlobalStyle, GlobalStyleComponent, ThemeProps, DefaultTheme } from 'styled-components';
export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle `
    * {
       color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.white};
       font-family: ${({theme}: ThemeProps<DefaultTheme>) => theme.fonts.basic};
    }

    body {
        background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.grayTint1};
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    button, input {
        border-radius: 4px;
        border: none;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }

    .blurred {
        filter: blur(5px)
    }
`;
