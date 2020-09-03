export namespace IError {
    export type Handler = (error: Error, info: React.ErrorInfo) => void;
    export interface Props {
        children: JSX.Element;
        error?: Error;
    }
    export interface State  {
        hasError: boolean;
        info?: React.ErrorInfo;
        error?: Error;
    }
}