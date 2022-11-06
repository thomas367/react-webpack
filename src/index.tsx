import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import stores, { StoreContext } from 'stores/index';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreContext.Provider value={stores}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
