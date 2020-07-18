import { actionCreatorFactory } from 'typescript-fsa';
import { Results } from '../models';

enum Type {
    SetResults = 'SET_RESULTS'
}

const create = actionCreatorFactory('RESULTS');

export const ResultsActions = {
    setResults: create<Results>(Type.SetResults)
}
