import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <NavLink to="/componentOne">Component One</NavLink>&nbsp;
            <NavLink to="/componentTwo">Component Two</NavLink>
        </>
    );
}

export default Navbar;
