import { Status } from '../models';
import { StatusActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialStatus:Status = {
    loading: true,
    filtering: false,
    selected: -1
}

export const statusReducer = reducerWithInitialState(initialStatus)
    .case(StatusActions.StatusActions.setLoading, (state, loading) => {
        let temp = { ...state };
        temp.loading = loading;
        return { ...temp }
    })
    .case(StatusActions.StatusActions.setFiltering, (state, filtering) => {
        let temp = { ...state };
        temp.filtering = filtering;
        return { ...temp }
    })
    .case(StatusActions.StatusActions.setSelected, (state, selected) => {
        let temp = { ...state };
        temp.selected = selected;
        return { ...temp }
    })