import React, { useContext, useEffect, useState } from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './../../api/user';
import { toast } from 'react-toastify';
import { useToggle } from './../../hooks/useToggle';
import { ContextLayout } from '../../Layout/Layout';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [isTextChanged, setIsTextChanged] = useToggle();
    const accounts = useContext(ContextLayout)[3];
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            toast.error('Username or password is invalid', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false;
        }

        if (username.toLocaleLowerCase() === 'admintest' && password.toLocaleLowerCase() === '12345678') {
            const users = {
                user: [
                   {
                    user: username,
                    token: 'abcdef'
                   }
                ],
                loading: false,
                error: ''
            }
            loginUser(users, dispatch, navigation);
            return true;
        }

        const checkAccount  = accounts.some(item => item.username.toLocaleLowerCase() === username.toLocaleLowerCase() && window.atob(item.password) === password);
        if (checkAccount) {
            const users = {
                user: [
                   {
                    user: username,
                    token: 'abcdef'
                   }
                ],
                loading: false,
                error: ''
            }
            loginUser(users, dispatch, navigation);
            return true;
        }
        toast.error('Username or password is incorrect', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
       <>
            <form className="login-form form" onSubmit={handleLogin}>
                    <div className='form-group'>
                        <div className="form-field">
                                <input type="text" value={username} placeholder=' ' onChange={(e) => setUsername(e.target.value)} />
                                <span></span>
                                <label>Username</label>
                        </div>
                        <i className="icon fas fa-user"></i>
                    </div>
                    <div className='form-group'>
                        <div className="form-field">
                                <input type={!isTextChanged ? 'password' : 'text'} placeholder=' ' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <span></span>
                                <label>Password</label>
                                {!isTextChanged && <i className="icon icon-eye fas fa-eye" onClick={setIsTextChanged}></i>}
                                {isTextChanged && <i className="icon icon-eye far fa-eye-slash" onClick={setIsTextChanged}></i>}
                        </div>
                        <i className="icon fas fa-lock"></i>
                    </div>
                    <button type="submit" className="btn btn-login">
                        đăng nhập
                    </button>
            </form>
            <div className="login-footer">
                <Link to='/register'>Đăng ký</Link>
                <Link to='/forgot-password'>Quên mật khẩu</Link>
            </div>
       </>
    );
}

export default Login;