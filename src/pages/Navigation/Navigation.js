import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
    const checkShareLocation = () => {
        if (localStorage.getItem('end_date') !== null) {
            localStorage.removeItem('end_date')
        }
    }
    return (
        <ul className="nav">
            <li>
                <NavLink to='/agency'  onClick={checkShareLocation}>
                    <i className="fas fa-users"></i>
                    <span className="title">Agency</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/system'  onClick={checkShareLocation}>
                    <i className="fas fa-cogs"></i>
                    <span className="title">System</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/'  onClick={checkShareLocation}>
                    <i className="fas fa-home"></i>
                    <span className="title">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/news' onClick={checkShareLocation}>
                    <i className="fas fa-newspaper"></i>
                    <span className="title">News</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/info' onClick={checkShareLocation}>
                    <i className="fas fa-user"></i>
                    <span className="title">Account</span>
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;