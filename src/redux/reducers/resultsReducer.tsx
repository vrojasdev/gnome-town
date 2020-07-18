import { Results } from '../models';
import { ResultsActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialResults:Results = {
    active: []
}

export const resultsReducer = reducerWithInitialState(initialResults)
    .case(ResultsActions.ResultsActions.setResults, (state, active) => {
        let temp = {...state};
        temp.active = [...active];
        return { ...temp }
    })