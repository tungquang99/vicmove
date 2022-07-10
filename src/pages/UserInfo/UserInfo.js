import React, { useContext } from 'react';
import { ContextLayout } from '../../Layout/Layout';
import './UserInfo.scss'
import { convertNumber } from './../../shared/convertNumber';
import { logout } from '../../Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function UserInfo() {
    const users = useContext(ContextLayout);
    const navigation = useNavigate()
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigation('vicmove/login');
    }
    return (
        <div className='user-info'>
            {
                !users[1] && (
                    <ul>
                    <li className="d-flex">
                        <span className='title'>Tên đăng nhập:</span>
                        <span className="user">{users[4]}</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Số điện thoại:</span>
                        <span>{users[4] === 'admintest' ? convertNumber('0395686343') : ''}</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Ngày tạo:</span>
                        <span></span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Trạng thái:</span>
                        <span className="status">Active</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Hotline:</span>
                        <span></span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Email: admintest@gmail.com</span>
                        <span></span>
                    </li>
                </ul>
                )
            }
            <button className="btn btn-lock" onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
}

export default UserInfo;