import { actionCreatorFactory } from 'typescript-fsa';

/*
    here it is the definition of the Actions relative to the Results
    - ResetResults -> when the user clear the filters, it will return 'active' to the 'initial' value
    - SetActiveResults -> updates the active results when the user filters the data
    - SetInitialResults -> on first loading, set the values for the initial and active results
*/

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
