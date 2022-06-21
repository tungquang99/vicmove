import React, { useContext } from 'react';
import { ContextLayout } from '../../Layout/Layout';
import './UserInfo.scss'
import { convertNumber } from './../../shared/convertNumber';

function UserInfo() {
    const users = useContext(ContextLayout)
    return (
        <div className='user-info'>
            {
                !users[1] && (
                    <ul>
                    <li className="d-flex">
                        <span className='title'>Tên đăng nhập:</span>
                        <span className="user">Admintest</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Số điện thoại:</span>
                        <span>{convertNumber('0395686343')}</span>
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
            <button className="btn btn-lock">Khóa tài khoản</button>
        </div>
    );
}

export default UserInfo;