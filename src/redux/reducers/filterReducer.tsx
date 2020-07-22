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

export const initialFilter:Filters = {
    active: { ...initialFilterValues },
    initialValues: { ...initialFilterValues },
    resetValues: { ...initialFilterValues }
}

export const filterReducer = reducerWithInitialState(initialFilter)
    .case(FilterActions.FilterActions.setFilterName, (state, name) => {
        let temp = { ...state };
        temp.active.name = name;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterAge, (state, age) => {
        let temp = { ...state };
        temp.active.minAge = age.minAge;
        temp.active.maxAge = age.maxAge;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterWeight, (state, weight) => {
        let temp = { ...state };
        temp.active.minWeight = weight.minWeight;
        temp.active.maxWeight = weight.maxWeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterHeight, (state, height) => {
        let temp = { ...state };
        temp.active.minHeight = height.minHeight;
        temp.active.maxHeight = height.maxHeight;
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
    .case(FilterActions.FilterActions.setFilterResetValues, (state,  allValues ) => {
        let temp = {...state};
        temp.initialValues = { ...allValues };
        temp.resetValues = { ...allValues, hairColor: [], professions: [] };
        return { ...temp }
    })
    .case(FilterActions.FilterActions.clearActiveFilterValues, (state) => {
        let temp = {...state};
        let resetValues = temp.resetValues;
        temp.active = { ...resetValues };
        return { ...temp }
    });