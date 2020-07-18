import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { resultsReducer } from './resultsReducer';
import { statusReducer } from './statusReducer';
import { townReducer } from './townReducer';
import { RootState } from '../models/RootState';

const createRootReducer = () => combineReducers<RootState>({
    town: townReducer,
    status: statusReducer,
    filters: filterReducer,
    results: resultsReducer
});

export { createRootReducer };