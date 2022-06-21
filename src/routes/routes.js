import React from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from './../components/Login/Login';
import Register from './../components/Register/Register';
import ForgotPass from './../components/ForgotPass/ForgotPass';
import { getToken } from './../Auth/getToken';
import RequireAuth from './../Auth/RequireAuth';
import SystemConfig from '../pages/SystemCofig/SystemConfig';
import News from '../pages/News/News';
import UserInfo from '../pages/UserInfo/UserInfo';
import Agency from '../pages/Agency/Agency';

function Routers() {
    let element = useRoutes([
        { path: "vicmove/", element: <RequireAuth><Main /></RequireAuth>},
        { path: 'vicmove/login', element: getToken() ? <Navigate to="/" /> : <Login /> },
        { path: 'vicmove/register', element: getToken() ? <Navigate to="/" /> : <Register /> },
        { path: 'vicmove/forgot-password', element: getToken() ? <Navigate to="/" /> : <ForgotPass /> },
        { path: "vicmove/agency", element: <RequireAuth><Agency /></RequireAuth> },
        { path: "vicmove/system", element: <RequireAuth><SystemConfig /></RequireAuth> },
        { path: "vicmove/news", element: <RequireAuth><News /></RequireAuth> },
        { path: "vicmove/info", element: <RequireAuth><UserInfo /></RequireAuth> },
    ])
    return element;
}
export default Routers;