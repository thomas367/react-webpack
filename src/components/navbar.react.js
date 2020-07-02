import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <Link to="/componentOne">Component One</Link>&nbsp;
            <Link to="/componentTwo">Component Two</Link>
        </>
    );
}

export default Navbar;
