import {
    COMMENT_CREATE,
    COMMENT_UPDATE,
} from './type';
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
        case COMMENT_UPDATE:
            const {data} = action; // это новый обновлённый коментарий
            const {comments} = state; // коментарий который сейчас храняться в state
            const itemIndex = comments.findIndex(res=> res.id === data.id);
            const nextComments = [
                ...comments.slice(0, itemIndex),
                data,
                ...comments.slice(itemIndex + 1)
            ];
            return {
                ...state,
                comments: nextComments,
                //comments: [...state.comments, action.data]
            }
        default:
            return state;
    }
}