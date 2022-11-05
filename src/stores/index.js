/* eslint-disable react/prop-types */
import React from 'react';
import { configure } from 'mobx';
import Notes from 'stores/notes';

class GlobalStore {
    constructor() {
        configure({
            enforceActions: 'observed',
        });

        // Here add all the stores
        this.notes = new Notes(this);
    }
}

const stores = new GlobalStore();

export const StoreContext = React.createContext();

export const useStores = () => React.useContext(StoreContext);

export default stores;
