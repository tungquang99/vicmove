import React, { useContext } from 'react';
import './Main.scss';
import { IMAGE } from './../../contants/IMAGE';
import { convertNumber } from './../../shared/convertNumber';
import { ContextLayout } from '../../Layout/Layout';

function Main() {
    const users = useContext(ContextLayout)
   
    return (
       <div className=''>
            <div className='banner'>
                <img src={IMAGE.LOGO_2} className='logo' alt='' />
                <div className='user'>
                    <div className='name'>
                        <div className='title'>Tài khoản</div>
                        <div>{users[4]}</div>
                    </div>
                    <div className='phone'>
                        <div className='title'>Số điện thoại</div>
                        <div>{users[4] === 'admintest' ?  convertNumber('0395686343') : ''}</div>
                    </div>
                </div>
            </div>

            {
                !users[1] && (<div className='user-list'>
                {
                    users[0].map((item, key) => (
                        <div className='user-item d-flex' key={key}>
                            <div className='name'>{item.name}</div>
                            <div className='phone'>{convertNumber(item.phone)}</div>
                        </div>
                    ))
                }
            </div>)
            }
       </div>
    );
}

export default Main;