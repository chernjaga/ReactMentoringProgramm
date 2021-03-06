import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
    colors: {
        pink: '#f65261',
        black: '#232323',
        white: '#ffffff',
        green: '#63d313',
        grayTint1: '#424242',
        grayTint2: '#555555',
        grayTint3: '#969696'
    },
    url: {
        banner: ''
    },
    offsets: {
        sideOffset: '10%'
    },
    constants: {
        logoColors: {
            primary: '#ffffff',
            secondary: '#f65261'
        },
        cancelButton: {
            border:  '#f65261',
            backgroundColor: '#555555',
            color: '#f65261'
        },
        saveButton: {
            border: '#f65261',
            backgroundColor: '#f65261',
            color: '#ffffff'
        },
        spinnerColors: {
            primary: '#232323',
            secondary: '#969696'
        }
    },
    fonts: {
        basic: '"Google Sans", Roboto, RobotoDraft, Helvetica, Arial,sans-serif'
    }
};
