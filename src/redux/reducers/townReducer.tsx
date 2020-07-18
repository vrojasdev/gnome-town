import { Town } from '../models';
import { TownActions } from '../actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const initialTown:Town = {
    name: '',
    population: []
}

export const townReducer = reducerWithInitialState(initialTown)
    .case(TownActions.TownActions.setTownName, (state, { name }) => {
        let temp = { ...state };
        temp.name = name;
        return { ...temp }
    })
    .case(TownActions.TownActions.setPopulation, (state, { population }) => {
        let temp = { ...state };
        temp.population = [...population];
        return { ...temp }
    });