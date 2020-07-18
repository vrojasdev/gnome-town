import { Filters } from '../models';
import { FilterActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialFilter:Filters = {
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

export const filterReducer = reducerWithInitialState(initialFilter)
    .case(FilterActions.FilterActions.setFilterName, (state, name) => {
        let temp = { ...state };
        temp.name = name;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMinAge, (state, minAge) => {
        let temp = { ...state };
        temp.minAge = minAge;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMaxAge, (state, maxAge) => {
        let temp = { ...state };
        temp.maxAge = maxAge;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMinWeight, (state, minWeight) => {
        let temp = { ...state };
        temp.minWeight = minWeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMaxWeight, (state, maxWeight) => {
        let temp = { ...state };
        temp.maxWeight = maxWeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMinHeight, (state, minHeight) => {
        let temp = { ...state };
        temp.minHeight = minHeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterMaxHeight, (state, maxHeight) => {
        let temp = { ...state };
        temp.maxHeight = maxHeight;
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterHairColor, (state, hairColor) => {
        let temp = { ...state };
        temp.hairColor = [...hairColor];
        return { ...temp }
    })
    .case(FilterActions.FilterActions.setFilterProfessions, (state, professions) => {
        let temp = { ...state };
        temp.professions = [...professions];
        return { ...temp }
    })