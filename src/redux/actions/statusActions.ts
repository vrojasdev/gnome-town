import { actionCreatorFactory } from 'typescript-fsa';
import { Status } from '../models';

enum Type {
    SetLoading = 'SET_LOADING',
    SetFiltering = 'SET_FILTERING',
    SetSelected = 'SET_SELECTED'
}

const create = actionCreatorFactory('STATUS');

export const StatusActions = {
    setLoading: create<Status>(Type.SetLoading),
    setFiltering: create<Status>(Type.SetFiltering),
    setSelected: create<Status>(Type.SetSelected)
}
