import React from 'react';
import './LoginPage.scss'
import { IMAGE } from '../../contants/IMAGE';
import Routers from './route';



function LoginPage() {
    return (
        <div className="login">
            <div className="login-header">
                <div className="logo">
                    <img src={IMAGE.LOGO} />
                </div>
            </div>
            <Routers />
        </div>
    );
}

export default LoginPage