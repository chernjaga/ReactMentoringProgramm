import { Dispatch } from 'redux';
import { DispatchProps } from '.';

export type MovieAction = (dispatch: Dispatch<DispatchProps>) => void;
