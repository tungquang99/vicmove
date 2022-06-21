import React, { useContext, useEffect } from 'react';
import './systemConfig.scss';
import Loading from './../../components/Loading/Loading';
import { ContextLayout } from './../../Layout/Layout';

function SystemConfig() {
    const [user, isloading, setIsLoading] = useContext(ContextLayout)
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
                    <div className="text" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Khóa nhận lệnh</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Reload config</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Tăng chiết khấu đại lý</label>
                    </div>
                </div>
                <div className=''>
                    <div className="text" onClick={() => setIsLoading(true)}>
                            <span></span>
                            <label>Giảm chiết khấu đại lý</label>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}

export default SystemConfig;