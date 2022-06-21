import React from 'react';
import './systemConfig.scss';

function SystemConfig() {
    return (
        <div className='system'>
            <form className="form">
                <div className='form-group'>
                    <div className="form-field">
                            <input type="text" placeholder=' ' />
                            <span></span>
                            <label>Khóa nhận lệnh</label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className="form-field">
                            <input type="text" placeholder=' ' />
                            <span></span>
                            <label>Reload config</label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className="form-field">
                            <input type="text" placeholder=' ' />
                            <span></span>
                            <label>Tăng chiết khấu đại lý</label>
                    </div>
                </div>
                <div className='form-group'>
                    <div className="form-field">
                            <input type="text" placeholder=' ' />
                            <span></span>
                            <label>Giảm chiết khấu đại lý</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SystemConfig;