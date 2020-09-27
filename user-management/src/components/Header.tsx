import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="p-3">
            <Navbar.Brand href="/">
            <img
                alt=""
                src="/logo.png"
                width="40"
                height="30"
                className="d-inline-block align-top mr-2"
            />{' '}
            User Management
            </Navbar.Brand>
        </Navbar>
    );
}

export default Header;
