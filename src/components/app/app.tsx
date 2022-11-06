import React, { ReactElement } from 'react';
import styles from 'components/app/app.scss';
import ComponentOne from 'components/componentOne';
import ComponentTwo from 'components/componentTwo';
import Navbar from 'components/navbar';
import RootRoute from 'components/rootRoute';
import { Routes, Route } from 'react-router-dom';

function App(): ReactElement {
    return (
        <>
            <p className={styles.info}>A react webpack boilerplate</p>
            <Navbar />
            <Routes>
                <Route path="/" element={<RootRoute />} />
                <Route path="componentOne" element={<ComponentOne />} />
                <Route path="componentTwo" element={<ComponentTwo />} />
            </Routes>
        </>
    );
}

export default App;
