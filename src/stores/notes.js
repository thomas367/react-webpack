import { observable, action, makeObservable } from 'mobx';

class Common {
    text = '';

    constructor(store) {
        this.store = store;

        makeObservable(this, {
            text: observable,
            setText: action.bound,
        });
    }

    setText(text) {
        this.text = text;
    }
}

export default Common;
