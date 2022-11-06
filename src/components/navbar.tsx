import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(): ReactElement {
    return (
        <>
            <NavLink to="/componentOne">Component One</NavLink>&nbsp;
            <NavLink to="/componentTwo">Component Two</NavLink>
        </>
    );
}

export default Navbar;
