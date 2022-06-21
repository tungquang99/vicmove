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
        { path: "/",
          element: <RequireAuth><Main /></RequireAuth>,
        },
        { path: 'login', element: getToken() ? <Navigate to="/" /> : <Login /> },
        { path: 'register', element: getToken() ? <Navigate to="/" /> : <Register /> },
        { path: 'forgot-password', element: getToken() ? <Navigate to="/" /> : <ForgotPass /> },
        { path: "agency", element: <RequireAuth><Agency /></RequireAuth> },
        { path: "system", element: <RequireAuth><SystemConfig /></RequireAuth> },
        { path: "news", element: <RequireAuth><News /></RequireAuth> },
        { path: "info", element: <RequireAuth><UserInfo /></RequireAuth> },
    ])
    return element;
}
export default Routers;