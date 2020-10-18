import { GlobalState } from './GlobalState';

export type MapStateToProps = (
    state: GlobalState
) => {
    [key: string]: unknown;
};
