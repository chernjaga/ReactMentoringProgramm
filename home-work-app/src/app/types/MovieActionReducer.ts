import { MovieState } from '.';
import { MovieAction } from './MovieAction';

export type MovieActionReducer = (
    state: MovieState,
    action: MovieAction
) => MovieState;