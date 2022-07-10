import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ContextLayout } from '../../Layout/Layout';
import './UserInfo.scss'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function UserItem() {
    const users = useContext(ContextLayout);
    const id= useParams().agencyId;
    const [status, setStatus] = useState(null);
    const user = users[0].filter(item => item.id === Number(id));
    console.log(user);
    if (user[0] && user[0].name) {
        users[5](user[0].name)
    }

    useEffect(() => {
        fetch(`https://62b42d8a530b26da4cb832bf.mockapi.io/time/${id}`, {
            method: 'GET', // or 'PUT'
            })
        .then(response => response.json())
        .then(data => setStatus(data.status))
    }, [id])
    

    const updateStatus = (id, status) => {
        const data = {
            status: status 
        }
        users[2](true)
        fetch(`https://62b42d8a530b26da4cb832bf.mockapi.io/time/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then((data) => {
                setStatus(data.status)
                users[2](false)
            })
            .catch((error) => {
                users[2](false)
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
        <div className='user-info'>
            {
                user && user.length > 0 && user[0] && (
                    <Fragment>
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
                                <span className={`status status--${status ? 'active' : 'lock'}`}>{status ? 'Active' : 'Lock'}</span>
                            </li>
                        </ul>
                        {status && <button className="btn btn-lock" onClick={() => updateStatus(id, false)}>Khóa tài khoản</button>}
                        {!status && <button className="btn btn-lock" onClick={() => updateStatus(id, true)}>Mở khóa</button>}
                    </Fragment>
                )
            }
        </div>
    );
}

export default UserItem;