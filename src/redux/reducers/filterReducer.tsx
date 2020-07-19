import { Filters, FilterOptions } from '../models';
import { FilterActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialFilterValues:FilterOptions = {
    name: '',
    minAge: 0,
    maxAge: 1000,
    minWeight: 0,
    maxWeight: 1000,
    minHeight: 0,
    maxHeight: 1000,
    hairColor: [],
    professions: []
}

const initialFilter:Filters = {
    active: initialFilterValues,
    resetValues: initialFilterValues
}

export const filterReducer = reducerWithInitialState(initialFilter)
    .case(FilterActions.FilterActions.setFilterName, (state, name) => {
        let temp = { ...state };
        temp.active.name = name;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMinAge, (state, minAge) => {
        let temp = { ...state };
        temp.active.minAge = minAge;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMaxAge, (state, maxAge) => {
        let temp = { ...state };
        temp.active.maxAge = maxAge;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMinWeight, (state, minWeight) => {
        let temp = { ...state };
        temp.active.minWeight = minWeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMaxWeight, (state, maxWeight) => {
        let temp = { ...state };
        temp.active.maxWeight = maxWeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMinHeight, (state, minHeight) => {
        let temp = { ...state };
        temp.active.minHeight = minHeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMaxHeight, (state, maxHeight) => {
        let temp = { ...state };
        temp.active.maxHeight = maxHeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterHairColor, (state, hairColor) => {
        let temp = { ...state };
        temp.active.hairColor = [...hairColor];
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterProfessions, (state, professions) => {
        let temp = { ...state };
        temp.active.professions = [...professions];
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterResetValues, (state,  resetValues ) => {
        let temp = {...state};
        temp.resetValues = { ...resetValues };
        return { ...temp }
    });