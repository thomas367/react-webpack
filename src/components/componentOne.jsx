import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from 'stores/index';

function ComponentOne() {
    const { notes: Notes } = useStores();
    const { text, setText } = Notes;

    useEffect(() => {
        setText('Component One. Mobx rocks!!!');
    }, []);

    return <p>{text}</p>;
}

export default observer(ComponentOne);
