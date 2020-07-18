import { createStore, Store  } from 'redux';
import { createRootReducer } from '../reducers';
import { RootState } from '../models';
import { devToolsEnhancer } from 'redux-devtools-extension';

export function configureStore(initialState?:RootState):Store<RootState> {
    const rootReducer = createRootReducer();
        
    const store = createStore(
        rootReducer, 
        initialState,
        // devToolsEnhancer is included only for using Redux Devtools in Chrome Devtools
        devToolsEnhancer({})
    ) as Store<RootState>;

    return store;
}

