import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextLayout } from '../../Layout/Layout';
import { convertNumber } from './../../shared/convertNumber';
import './Agency.scss'

function Agency() {
    const users = useContext(ContextLayout)
    return (
        <div className='agency'>
            <div className='user-list'>
                {
                   !users[1] && ( users[0].map((item, key) => (
                    <NavLink to={`/agency/${item.id}`} className='user-item d-flex nav-link' key={key}>
                        <div className='name'>{item.name}</div>
                        <div className='phone'>{convertNumber(item.phone)}</div>
                    </NavLink>
                )))
                }
            </div>
        </div>
    );
}

export default Agency;