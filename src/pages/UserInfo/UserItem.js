import React, { useContext } from 'react';
import { ContextLayout } from '../../Layout/Layout';
import './UserInfo.scss'
import { useParams } from 'react-router-dom';

function UserItem() {
    const users = useContext(ContextLayout);
    const id= useParams().agencyId;
    const user = users[0].filter(item => item.id === Number(id));
    if (user[0] && user[0].name) {
        users[5](user[0].name)
    }
    return (
        <div className='user-info'>
            {
                !users[1] && (
                    <ul>
                    <li className="d-flex">
                        <span className='title'>Tên đăng nhập:</span>
                        <span className="user">{user[0].name}</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Số điện thoại:</span>
                        <span>{user[0].phone}</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Ngày tạo:</span>
                        <span>{user[0].createAt}</span>
                    </li>
                    <li className="d-flex">
                        <span className='title'>Trạng thái:</span>
                        <span className="status">Active</span>
                    </li>
                </ul>
                )
            }
            <button className="btn btn-lock">Khóa tài khoản</button>
        </div>
    );
}

export default UserItem;