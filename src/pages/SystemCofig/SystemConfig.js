import React, { useContext, useEffect, useState } from 'react';
import './systemConfig.scss';
import Loading from './../../components/Loading/Loading';
import { ContextLayout } from './../../Layout/Layout';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SystemConfig() {
    const [user, isloading, setIsLoading] = useContext(ContextLayout)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [isloading])
    
    return (
        <>
        <div className='system'>
            <form className="">
                <div className=''>
                    <div className="text text-cursor" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Khóa nhận lệnh</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text text-cursor" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Reload config</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text text-cursor" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Tăng chiết khấu đại lý</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text text-cursor" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Giảm chiết khấu đại lý</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text text-cursor" onClick={handleShow}>
                            <span></span>
                            <label>Chia sẻ vị trí của bạn</label>
                    </div>
                </div>
            </form>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Chia sẻ vị trí</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Để chia sẽ vị trí của bạn, cần quyền truy cập vào vị trí của bạn dưới nền. Cấp quyền để sử dụng tính năng này.
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-cancel' onClick={handleClose}>Hủy</button>
                    <Link to='/location' className='btn btn-lock'>Đồng ý</Link>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
}

export default SystemConfig;