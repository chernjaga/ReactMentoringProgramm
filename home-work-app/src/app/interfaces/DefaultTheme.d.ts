import { DefaultTheme } from "styled-components/native";

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
        [key: string]: string
    }
    fonts: {
        basic: string,
        [key: string]: string
    }
}
}
