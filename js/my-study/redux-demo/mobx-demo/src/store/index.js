import {createContext, useContext} from 'react';
import CounterStore from './CouterStore';
import TodoStore from './TodoStore';

class RootStore {
    constructor() {
        this.counterStore = new CounterStore();
        this.todoStore = new TodoStore();
    }
}

const rootStore = new RootStore();
const RootStoreContext = createContext();

function RootStoreProvider({children}) {
    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
}

function useRootStore() {
    return useContext(RootStoreContext);
}

export {
    RootStoreProvider,
    useRootStore
};

