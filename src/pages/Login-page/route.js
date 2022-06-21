import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { getToken } from '../../Auth/getToken';
import ForgotPass from '../../components/ForgotPass/ForgotPass';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

function Routers() {

    let element = useRoutes([
        { path: '/login', element: getToken() ? <Navigate to="/" /> : <Login /> },
        { path: '/register', element: getToken() ? <Navigate to="/" /> : <Register /> },
        { path: '/forgot-password', element: getToken() ? <Navigate to="/" /> : <ForgotPass /> },
    ])
    return element;
}
export default Routers;