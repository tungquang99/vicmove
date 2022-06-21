import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
    return (
        <ul className="nav">
            <li>
                <NavLink to='/vicmove/agency'>
                    <i className="fas fa-users"></i>
                    <span className="title">Agency</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/vicmove/system' >
                    <i className="fas fa-cogs"></i>
                    <span className="title">System</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/vicmove/' >
                    <i className="fas fa-home"></i>
                    <span className="title">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/vicmove/news'>
                    <i className="fas fa-newspaper"></i>
                    <span className="title">News</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/vicmove/info'>
                    <i className="fas fa-user"></i>
                    <span className="title">Account</span>
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;