import { actionCreatorFactory } from 'typescript-fsa';
//import { Status } from '../models';

enum Type {
    SetLoading = 'SET_LOADING',
    SetFiltering = 'SET_FILTERING',
    SetSelected = 'SET_SELECTED'
}

const create = actionCreatorFactory('STATUS');

export const StatusActions = {
    setLoading: create<boolean>(Type.SetLoading),
    setFiltering: create<boolean>(Type.SetFiltering),
    setSelected: create<number>(Type.SetSelected)
}
