import { actionCreatorFactory } from 'typescript-fsa';
import { Filters } from '../models';

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
    SetFilterResults = 'SET_FILTER_RESULTS'
}

const create = actionCreatorFactory('FILTERS');

export const FilterActions = {
    setFilterName: create<Filters>(Type.SetFilterName),
    setFilterMinAge: create<Filters>(Type.SetFilterMinAge),
    setFilterMaxAge: create<Filters>(Type.SetFilterMaxAge),
    setFilterMinWeight: create<Filters>(Type.SetFilterMinWeight),
    setFilterMaxWeight: create<Filters>(Type.SetFilterMaxWeight),
    setFilterMinHeight: create<Filters>(Type.SetFilterMinHeight),
    setFilterMaxHeight: create<Filters>(Type.SetFilterMaxHeight),
    setFilterHairColor: create<Filters>(Type.SetFilterHairColor),
    setFilterProfessions: create<Filters>(Type.SetFilterProfessions),
    setFilterResults: create<Filters>(Type.SetFilterResults)
}
