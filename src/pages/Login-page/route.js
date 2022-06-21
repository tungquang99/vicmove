import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { getToken } from '../../Auth/getToken';
import ForgotPass from '../../components/ForgotPass/ForgotPass';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

function Routers() {

    let element = useRoutes([
        { path: '/vicmove/login', element: getToken() ? <Navigate to="/vicmove/" /> : <Login /> },
        { path: '/vicmove/register', element: getToken() ? <Navigate to="/vicmove/" /> : <Register /> },
        { path: '/vicmove/forgot-password', element: getToken() ? <Navigate to="/vicmove/" /> : <ForgotPass /> },
    ])
    return element;
}
export default Routers;