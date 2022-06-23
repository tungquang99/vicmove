import React, { useState } from 'react';
import './Register.scss'
import { IMAGE } from './../../contants/IMAGE';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useToggle } from './../../hooks/useToggle';



function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [isTextChanged, setIsTextChanged] = useToggle();

    const handleRegister = (e) => {
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

        const data = {
            username: username,
            password: password
        }

        fetch('https://62b42d8a530b26da4cb832bf.mockapi.io/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then((data) => {
                navigation('/login')
            })
            .catch((error) => {
                toast.error(error, {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return (
       <>
         <form className="login-form form" onSubmit={handleRegister}>
                <div className='form-group'>
                    <div className="form-field">
                            <input type="text" value={username} placeholder=' ' onChange={(e) => setUsername(e.target.value)}/>
                            <span></span>
                            <label>Username</label>
                    </div>
                    <i className="icon fas fa-user"></i>
                </div>
                <div className='form-group'>
                    <div className="form-field">
                            <input type={!isTextChanged ? 'password' : 'text'} value={password} placeholder=' ' onChange={(e) => setPassword(e.target.value)} />
                            <span></span>
                            <label>Password</label>
                            {!isTextChanged && <i className="icon icon-eye fas fa-eye" onClick={setIsTextChanged}></i>}
                            {isTextChanged && <i className="icon icon-eye far fa-eye-slash" onClick={setIsTextChanged}></i>}
                    </div>
                    <i className="icon fas fa-lock"></i>
                </div>
                <button type="submit" className="btn btn-login">
                    đăng ký
                </button>
                <Link to='/login' className="btn btn-login">
                        đăng nhập
                </Link>
            </form>
       </>
    );
}

export default Register;