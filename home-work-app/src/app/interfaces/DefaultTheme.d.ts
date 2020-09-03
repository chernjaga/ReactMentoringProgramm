import { DefaultTheme } from "styled-components/native";

type ButtonsConst = {
    [key: string]: {[key: string]: string}
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
        [key: string]: string
    },
    url: {
        [key: string]: string
    },
    offsets: {
        [key: string]: string
    },
    constants: {
        logoColors: {
            primary: string,
            secondary: string
        },
        cancelButton: {
            border:  string,
            backgroundColor: string,
            color: string
        },
        saveButton: {
            border: string,
            backgroundColor: string,
            color: string
        }
    },
    fonts: {
        basic: string,
        [key: string]: string
    }
}
}
