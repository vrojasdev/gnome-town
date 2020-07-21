import { actionCreatorFactory } from 'typescript-fsa';
//import { Results } from '../models';

enum Type {
    ResetResults = 'SET_RESULTS',
    SetActiveResults = 'SET_ACTIVE_RESULTS',
    SetInitialResults = 'SET_INITIAL_RESULTS'
}

const create = actionCreatorFactory('RESULTS');

export const ResultsActions = {
    resetResults: create<Array<number>>(Type.ResetResults),
    setActiveResults: create<Array<number>>(Type.SetActiveResults),
    setInitialResults: create<Array<number>>(Type.SetInitialResults)
}
