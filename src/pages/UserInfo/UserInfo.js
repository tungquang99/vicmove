import React, { useContext } from 'react';
import { ContextLayout } from '../../Layout/Layout';
import './UserInfo.scss'
import { convertNumber } from './../../shared/convertNumber';
import { logout } from '../../Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';

function UserInfo() {
    const users = useContext(ContextLayout);
    const user  = users[3].filter(item => item.username.toLocaleLowerCase() === users[4].toLocaleLowerCase());
    const navigation = useNavigate()
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleLogout = () => {
        dispatch(logout())
        navigation('vicmove/login');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDeleteAccount = () => {
        fetch(`https://62b42d8a530b26da4cb832bf.mockapi.io/user/${user[0].id}`, {
                method: 'DELETE', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                })
                .then(response => response.json())
                .then((data) => {
                    handleClose();
                    toast.success('Xóa tài khoản thành công', {
                        position: 'top-center',
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    localStorage.clear();
                    setTimeout(() => {
                        navigation('/login')
                    }, 3200);
                })
                .catch((error) => {
                    handleClose();
                    toast.error(error, {
                        position: 'top-center',
                        autoClose: 3000,
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
                        <span className='title'>Email: {users[4] === 'admintest' ? 'admintest' : users[4]}@gmail.com</span>
                        <span></span>
                    </li>
                </ul>
                )
            }
            <button className="btn btn-lock mr-2" onClick={handleShow}>Xóa tài khoản</button>
            <button className="btn btn-lock" onClick={handleLogout}>Đăng xuất</button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Xóa tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa tài khoản?
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-cancel' onClick={handleClose}>Không</button>
                    <button className='btn btn-lock' onClick={handleDeleteAccount}>Xác nhận</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserInfo;