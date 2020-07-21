import { actionCreatorFactory } from 'typescript-fsa';

enum Type {
    SetLoading = 'SET_LOADING',
    SetPanelVisible = 'SET_PANEL_VISIBLE',
    SetSelected = 'SET_SELECTED',
    setClearFilters = 'SET_CLEAR_FILTERS'
}

const create = actionCreatorFactory('STATUS');

export const StatusActions = {
    setLoading: create<boolean>(Type.SetLoading),
    setPanelVisible: create<boolean>(Type.SetPanelVisible),
    setSelected: create<number>(Type.SetSelected),
    setClearFilters: create<boolean>(Type.setClearFilters)
}
