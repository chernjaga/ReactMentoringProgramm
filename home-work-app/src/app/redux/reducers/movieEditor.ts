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

const deleteHandler: (payload: any) => void = (payload) => {
    console.log(payload);
};

const initialEditState: EditorState = {
    currentAction: 'init'
};

export const movieEditor: Reducer = (state: EditorState = initialEditState, action: EditorEction) => {
    switch (action.type.toUpperCase()) {
        case 'DELETE': deleteHandler(action.payload);
    }

    return state;
};