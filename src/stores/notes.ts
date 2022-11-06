import { observable, action, makeObservable } from 'mobx';
import stores from 'stores/index';

class Common {
    store: typeof stores;

    text = '';

    constructor(store: typeof stores) {
        this.store = store;

        makeObservable(this, {
            text: observable,
            setText: action.bound,
        });
    }

    setText(text: string): void {
        this.text = text;
    }
}

export default Common;
