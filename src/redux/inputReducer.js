import { INPUT_TEXT } from './type';
const initialState = {
    text: ''
}

export const inputReducer = (state = initialState, action) => {
    console.log('input-text reducer > ', action);
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                //tetxt: state.text
            }
        default:
            return state;
    }
}