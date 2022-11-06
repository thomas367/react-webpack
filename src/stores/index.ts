import React from 'react';
import { configure } from 'mobx';
import Notes from 'stores/notes';

class GlobalStore {
    notes: Notes;

    constructor() {
        configure({
            enforceActions: 'observed',
        });

        // Here add all the stores
        this.notes = new Notes(this);
    }
}

const stores = new GlobalStore();

export const StoreContext = React.createContext<typeof stores>(stores);

export const useStores = () => React.useContext(StoreContext);

export default stores;
