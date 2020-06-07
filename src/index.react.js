import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app.react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

const stores = {};

ReactDOM.render(
    <Router>
        <Provider {...stores}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
