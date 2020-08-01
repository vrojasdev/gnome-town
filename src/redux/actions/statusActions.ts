import { actionCreatorFactory } from 'typescript-fsa';

/*
    here it is the definition of the Actions relative to the Status
    - SetLoading -> indicates if the application is loading the data from the API
    - SetPanelVisible -> indicates if the Search Panel (filters) is visible
    - SetSelected -> indicates if the user has clicked in one Gnome to see the details
    - setClearFilters -> indicates that the user has clicked the button "Clear Filters"
*/

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
