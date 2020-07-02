import React from 'react';
import styles from 'app.scss';
import ComponentOne from 'components/componentOne.react';
import ComponentTwo from 'components/componentTwo.react';
import Navbar from 'components/navbar.react';
import RootRoute from 'components/rootRoute.react';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <p className={styles.info}>A react webpack boilerplate</p>
            <Navbar />
            <Route exact path="/" component={RootRoute} />
            <Switch>
                <Route exact path="/componentOne" component={ComponentOne} />
                <Route exact path="/componentTwo" component={ComponentTwo} />
            </Switch>
        </>
    );
}

export default App;
