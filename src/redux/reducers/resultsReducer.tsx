import { Results } from '../models';
import { ResultsActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialResults:Results = {
    active: [],
    initial: []
}

export const resultsReducer = reducerWithInitialState(initialResults)
    .case(ResultsActions.ResultsActions.setInitialResults, (state, initial) => {
        let temp = {...state};
        temp.active = [...initial];
        temp.initial = [...initial];
        return { ...temp }
    })
    .case(ResultsActions.ResultsActions.setActiveResults, (state, active) => {
        let temp = { ...state };
        temp.active = [...active];
        return { ...temp }
    })
    .case(ResultsActions.ResultsActions.resetResults, (state) => {
        let temp = { ...state };
        temp.active = [...temp.initial];
        return { ...temp }
    });