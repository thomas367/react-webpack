import React, { useEffect, ReactElement } from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'stores/index';

function ComponentTwo(): ReactElement {
    const { notes: Notes } = useStores();
    const { text, setText } = Notes;

    useEffect(() => {
        setText('Component Two. Mobx & Typescript rocks!!!');
    }, []);

    return <p>{text}</p>;
}

export default observer(ComponentTwo);
