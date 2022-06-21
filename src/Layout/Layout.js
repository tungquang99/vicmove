import React, { createContext, useEffect, useState } from 'react';
import LoginPage from './../pages/Login-page/LoginPage';
import { ToastContainer } from 'react-toastify';
import { getToken } from '../Auth/getToken';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Routers from './../routes/routes';
import { useLocation } from 'react-router-dom';
import { logout } from '../Auth/authSlice';
import Navigation from '../pages/Navigation/Navigation';
import { usersList } from './../contants/data';

export const ContextLayout = createContext();

function Layout() {
    const navigation = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('Trang chủ')
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (!getToken()) {
            navigation('/login')
        }
    }, [getToken()]);
    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle('Trang chủ')
                break;
            case '/agency':
                setTitle('Đại lý')
                break;
            case '/system':
                setTitle('Cấu hình hệ thống')
                break;
            case '/news':
                setTitle('Tin tức')
                break;
            case '/info':
                setTitle('User Default')
                break;
            default:
                setTitle('Trang chủ')
                break;
        }
    }, [location.pathname])

    const handleLogout = () => {
        dispatch(logout())
        navigation('/login');
    }

    useEffect(() => {
        setUsers(usersList);
    }, [])
    
    return (
        <ContextLayout.Provider value={users}>
        <div style={{overflow: 'hidden'}}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                
            {!getToken() && <LoginPage /> } 
            { getToken() && 
                <div className='main'>
                    <div className='main-header'>
                        { title !== 'Trang chủ' && <i className="icon fas fa-chevron-left" onClick={() => navigation(-1)}></i>}
                        <div className="title">{title}<i className="fas fa-sign-out-alt" onClick={handleLogout}></i></div>
                        
                    </div>
                    <div className="main-body">
                        <Routers />
                    </div>
                    <div className='main-footer'>
                        <Navigation />
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            }
            {/* <Main /> */}
        </div>
        </ContextLayout.Provider>
    );
}

export default Layout;