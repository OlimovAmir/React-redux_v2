import { COMMENT_CREATE } from './type';
const initialState = {
    comments: [],
}

export const commentsReducer = (state = initialState, action) => {
    console.log('comments reducer > ', action);
    //return state;
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        default:
            return state;
     }
}