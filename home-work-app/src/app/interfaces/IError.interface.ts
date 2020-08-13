import { IJSX } from '../types';

export namespace IError {
    export type Handler = (error: Error, info: React.ErrorInfo) => void;
    export type Props = {
        error?: Error,
        children: any
    };
    export type State = {
        hasError: boolean,
        info?: React.ErrorInfo,
        error?: Error,
    };
};