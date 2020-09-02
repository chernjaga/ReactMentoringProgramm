import { createGlobalStyle, GlobalStyleComponent } from 'styled-components'
import { stylesConfig } from './style.configs';
export const GlobalStyle: GlobalStyleComponent<{}, {}> = createGlobalStyle `
    * {
       color: ${stylesConfig.colors.white};
       font-family: ${stylesConfig.fonts.basic};
    }

    body {
        background-color: ${stylesConfig.colors.grayTint1};
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

