import React from 'react';
import styles from 'components/app/app.scss';
import ComponentOne from 'components/componentOne.jsx';
import ComponentTwo from 'components/componentTwo.jsx';
import Navbar from 'components/navbar.jsx';
import RootRoute from 'components/rootRoute.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
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
