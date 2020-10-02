import { store } from '../store';

type EditorState = {
    currentAction: string,
    movieId?: number | string
};

type EditorAction = {
    type: string,
    payload: {
        [key: string]: string | number
    }
};

type Reducer = (
    state: EditorState,
    action: EditorAction
) => EditorState;

const getDeleteState: (id: string | number) => EditorState = (id: string | number): EditorState => {
    const currentState: EditorState = {
        currentAction: 'delete',
        movieId: id
    };

    return currentState;
};

const initialEditState: EditorState = {
    currentAction: 'initial'
};

export const movieEditor: Reducer = (state: EditorState = initialEditState, action: EditorAction): EditorState => {
    switch (action.type.toUpperCase()) {
        case 'DELETE':
            return {
                ...state,
                movies: state.movies.filter((movie: any): any => movie.id !== action.payload.id),
            };
        default:
            return state;
    }
};