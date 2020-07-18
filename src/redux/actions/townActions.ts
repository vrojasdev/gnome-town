import { actionCreatorFactory } from 'typescript-fsa';
import { Gnome, Town } from '../models';

/*
    here it is the definition of the Actions relative to the Town
    - setTownName -> set the name of the town (string)
    - setTownPopulation -> set the whole population (array of Gnomes)
    - setTownInfo -> can be used to set both properties(name & population) in one action 
*/

enum Type {
    SetTownName = 'SET_TOWN_NAME',
    SetPopulation = 'SET_POPULATION',
    SetTownInfo = 'SET_TOWN_INFO'
}

const create = actionCreatorFactory('TOWN');

export const TownActions = {
    setTownName: create<string>(Type.SetTownName),
    setPopulation: create<Array<Gnome>>(Type.SetPopulation),
    setTownInfo: create<Town>(Type.SetTownInfo)
}
