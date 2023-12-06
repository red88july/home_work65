import React from 'react';
import {NavLink} from "react-router-dom";


const Pages:React.FC = () => {
    return (
        <>
            <ul className="navbar-nav mr-auto flex-row flex-nowrap align-items-center justify-content-center gap-3">
                <li className="nav-item">
                  <NavLink to="/pages/home" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/pages/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/pages/contacts" className="nav-link">Contacts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/pages/divisions" className="nav-link">Divisions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/pages/admin" className="nav-link">Admin</NavLink>
                </li>
            </ul>
        </>
    );
};

export default Pages;