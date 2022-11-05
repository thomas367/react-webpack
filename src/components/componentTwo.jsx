import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'stores/index';

function ComponentTwo() {
    const { notes: Notes } = useStores();
    const { text, setText } = Notes;

    useEffect(() => {
        setText('Component Two. Mobx rocks!!!');
    }, []);

    return <p>{text}</p>;
}

export default observer(ComponentTwo);
