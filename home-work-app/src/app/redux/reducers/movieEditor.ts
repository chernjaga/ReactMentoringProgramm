type EditorState = {
    currentAction: string,
};

type EditorEction = {
    type: string,
    payload: {
        [key: string]: string | number
    }
};

type Reducer = (
    state: EditorState,
    action: EditorEction
) => EditorState;

const deleteHandler: () => void = () => {
    console.log('delete handler');
};

const initialEditState: EditorState = {
    currentAction: 'init'
};


export const movieEditor: Reducer = (state: EditorState = initialEditState, action: EditorEction) => {
    switch (action.type.toUpperCase()) {
        case 'DELETE': deleteHandler();
    }

    return state;
};