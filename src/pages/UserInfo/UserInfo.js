import React from 'react';
import './UserInfo.scss'

function UserInfo() {
    return (
        <div className='user-info'>
            <ul>
                <li className="d-flex">
                    <span className='title'>Tên đăng nhập:</span>
                    <span className="user">User default</span>
                </li>
                <li className="d-flex">
                    <span className='title'>Số điện thoại:</span>
                    <span></span>
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
                    <span className='title'>Email:</span>
                    <span></span>
                </li>
            </ul>

            <button className="btn btn-lock">Khóa tài khoản</button>
        </div>
    );
}

export default UserInfo;