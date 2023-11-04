import { combineReducers } from 'redux';
import { likeReducer } from './likeReducer';
import { inputReducer } from './inputReducer';


export const roorReducer = combineReducers({
    likeReducer,
    inputReducer
})