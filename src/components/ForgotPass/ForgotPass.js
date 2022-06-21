import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTogglePassword } from '../../hooks/useToggle';
import { useToggle } from '../../hooks/useToggle';
function ForgotPass() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [renewPassword, setReNewPPassword] = useState('');
    const navigation = useNavigate();
    const [isTextChanged, setIsTextChanged] = useToggle();
    const [isTextChanged2, setIsTextChanged2] = useToggle();

    const handleChangePass = (e) => {
        e.preventDefault();

        if (password === '' || newPassword === '') {
            toast.error('Password or new password is invalid', {
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

        if (newPassword !== renewPassword) {
            toast.error('Confirmation password does not match', {
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

        navigation('/login');
    }

    return (
        <>
            <form className="login-form form" onSubmit={handleChangePass}>
                <div className='form-group'>
                    <div className="form-field">
                            <input type='password' placeholder=' ' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <span></span>
                            <label>Password</label>
                    </div>
                    <i className="icon fas fa-lock"></i>
                </div>
                <div className='form-group'>
                    <div className="form-field">
                            <input type={!isTextChanged ? 'password' : 'text'} placeholder=' ' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            <span></span>
                            <label>New password</label>
                            {!isTextChanged && <i className="icon icon-eye fas fa-eye" onClick={setIsTextChanged}></i>}
                            {isTextChanged && <i className="icon icon-eye far fa-eye-slash" onClick={setIsTextChanged}></i>}
                    </div>
                    <i className="icon fas fa-lock"></i>
                </div>
                <div className='form-group'>
                    <div className="form-field">
                            <input type={!isTextChanged2 ? 'password' : 'text'} placeholder=' ' value={renewPassword} onChange={(e) => setReNewPPassword(e.target.value)}/>
                            <span></span>
                            <label>Re-new password</label>
                            {!isTextChanged2 && <i className="icon icon-eye fas fa-eye" onClick={setIsTextChanged2}></i>}
                            {isTextChanged2 && <i className="icon icon-eye far fa-eye-slash" onClick={setIsTextChanged2}></i>}
                    </div>
                    <i className="icon fas fa-lock"></i>
                </div>
                <button type="submit" className="btn btn-login">
                    Reset password
                </button>
                <Link to='/login' className="btn btn-login">
                        đăng nhập
                </Link>
            </form>
        </>
    );
}

export default ForgotPass;