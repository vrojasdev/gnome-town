import { Status } from '../models';
import { StatusActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export const initialStatus:Status = {
    loading: true,
    panelVisible: false,
    selected: -1,
    clearFilters: false
}

export const statusReducer = reducerWithInitialState(initialStatus)
    .case(StatusActions.StatusActions.setLoading, (state, loading) => {
        let temp = { ...state };
        temp.loading = loading;
        return { ...temp }
    })
    .case(StatusActions.StatusActions.setPanelVisible, (state, filtering) => {
        let temp = { ...state };
        temp.panelVisible = filtering;
        return { ...temp }
    })
    .case(StatusActions.StatusActions.setSelected, (state, selected) => {
        let temp = { ...state };
        temp.selected = selected;
        return { ...temp }
    })
    .case(StatusActions.StatusActions.setClearFilters, (state, clearFilters) => {
        let temp = { ...state }
        temp.clearFilters = clearFilters;
        return { ...temp }
    });