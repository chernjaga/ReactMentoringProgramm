import { GlobalState } from './GlobalState';

export type MapStateToProps = (state: GlobalState) => {
    // tslint:disable-next-line: no-any
    [key: string]: any
};