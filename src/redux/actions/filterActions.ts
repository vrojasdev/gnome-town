import { actionCreatorFactory } from 'typescript-fsa';
import { FilterOptions } from '../models';

enum Type {
    SetFilterName = 'SET_FILTER_NAME',
    SetFilterMinAge = 'SET_FILTER_MIN_AGE',
    SetFilterMaxAge = 'SET_FILTER_MAX_AGE',
    SetFilterMinWeight = 'SET_FILTER_MIN_WEIGHT',
    SetFilterMaxWeight = 'SET_FILTER_MAX_WEIGHT',
    SetFilterMinHeight = 'SET_FILTER_MIN_HEIGHT',
    SetFilterMaxHeight = 'SET_FILTER_MAX_HEIGHT',
    SetFilterHairColor = 'SET_FILTER_HAIR_COLOR',
    SetFilterProfessions = 'SET_FILTER_PROFESSIONS',
    SetFilterResetValues = 'SET_FILTER_RESET_VALUES',
    ClearActiveFilterValues = 'CLEAR_ACTIVE_FILTER_VALUES'
}

const create = actionCreatorFactory('FILTERS');

export const FilterActions = {
    setFilterName: create<string>(Type.SetFilterName),
    setFilterMinAge: create<number>(Type.SetFilterMinAge),
    setFilterMaxAge: create<number>(Type.SetFilterMaxAge),
    setFilterMinWeight: create<number>(Type.SetFilterMinWeight),
    setFilterMaxWeight: create<number>(Type.SetFilterMaxWeight),
    setFilterMinHeight: create<number>(Type.SetFilterMinHeight),
    setFilterMaxHeight: create<number>(Type.SetFilterMaxHeight),
    setFilterHairColor: create<Array<string>>(Type.SetFilterHairColor),
    setFilterProfessions: create<Array<string>>(Type.SetFilterProfessions),
    setFilterResetValues: create<FilterOptions>(Type.SetFilterResetValues),
    clearActiveFilterValues: create(Type.ClearActiveFilterValues)
}
