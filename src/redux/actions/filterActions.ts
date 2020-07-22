import { actionCreatorFactory } from 'typescript-fsa';
import { FilterOptions, Age, Weight, Height } from '../models';

/*
    here it is the definition of the Actions relative to the Filters
    - SetFilterName -> set the value for the Name filter
    - SetFilterAge -> set the value for the Age filter
    - SetFilterWeight -> set the value for the Weight filter
    - SetFilterHeight -> set the value for the Height filter
    - SetFilterHairColor -> set the value for the HairColor filter
    - SetFilterProfessions -> set the value for the Professions filter
    - SetFilterResetValues -> set all filters to the initial values of the application
    - ClearActiveFilterValues -> returns the active filters to their initial values
*/

enum Type {
    SetFilterName = 'SET_FILTER_NAME',
    SetFilterAge = 'SET_FILTER_AGE',
    SetFilterWeight = 'SET_FILTER_WEIGHT',
    SetFilterHeight = 'SET_FILTER_HEIGHT',
    SetFilterHairColor = 'SET_FILTER_HAIR_COLOR',
    SetFilterProfessions = 'SET_FILTER_PROFESSIONS',
    SetFilterResetValues = 'SET_FILTER_RESET_VALUES',
    ClearActiveFilterValues = 'CLEAR_ACTIVE_FILTER_VALUES'
}

const create = actionCreatorFactory('FILTERS');

export const FilterActions = {
    setFilterName: create<string>(Type.SetFilterName),
    setFilterAge: create<Age>(Type.SetFilterAge),
    setFilterWeight: create<Weight>(Type.SetFilterWeight),
    setFilterHeight: create<Height>(Type.SetFilterHeight),
    setFilterHairColor: create<Array<string>>(Type.SetFilterHairColor),
    setFilterProfessions: create<Array<string>>(Type.SetFilterProfessions),
    setFilterResetValues: create<FilterOptions>(Type.SetFilterResetValues),
    clearActiveFilterValues: create(Type.ClearActiveFilterValues)
}
