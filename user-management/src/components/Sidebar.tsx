import React from 'react';
import { Nav } from 'react-bootstrap';
import '../App.css';

const Sidebar = () => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
            <div className="container-fluid text-center d-flex flex-column align-items-center justify-content-center">
                <img
                    alt=""
                    src="/user.svg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
                <span className="my-3">Welcome User!</span>
            </div>
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link active>Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Tools</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Settings</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Sidebar;
