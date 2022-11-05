import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app.jsx';
import stores, { StoreContext } from 'stores/index';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <StoreContext.Provider value={stores}>
            <App />
        </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
