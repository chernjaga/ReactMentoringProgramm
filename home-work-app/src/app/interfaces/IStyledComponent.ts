import 'styled-components'

declare module 'styled-components' {
    export interface IStyledComponent {
        div: {
            [key: string]: string
        }
    }
}