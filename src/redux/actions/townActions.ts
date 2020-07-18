import { actionCreatorFactory } from 'typescript-fsa';
import { Town } from '../models';

enum Type {
    SetTownName = 'SET_TOWN_NAME',
    SetPopulation = 'SET_POPULATION'
}

const create = actionCreatorFactory('TOWN');

export const TownActions = {
    setTownName: create<Town>(Type.SetTownName),
    setPopulation: create<Town>(Type.SetPopulation)
}
