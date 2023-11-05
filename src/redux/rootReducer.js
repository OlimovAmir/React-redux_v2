import { combineReducers } from 'redux';
import { likeReducer } from './likeReducer';
import { inputReducer } from './inputReducer';
import { commentsReducer } from './commentReducer';


export const roorReducer = combineReducers({
    likeReducer,
    inputReducer,
    commentsReducer,
})