import React, { useContext } from 'react';
import './News.scss'
import { ContextLayout } from './../../Layout/Layout';

function News() {
    const users = useContext(ContextLayout)
    return (
        <div>
            {!users[1] && (
                <div className="new">
                <div className="new-item">
                    <div className="new-title">App thẻ đã nạp được mệnh giá từ 10.100đ</div>
                    <div className="new-description">App thẻ đã nạp được mệnh giá từ 10.100đ</div>
                </div>
                <div className="new-item">
                    <div className="new-title">App thẻ đã nạp được mệnh giá từ 10.100đ</div>
                    <div className="new-description">App thẻ đã nạp được mệnh giá từ 10.100đ</div>
                </div>
            </div>
            )}
        </div>
    );
}

export default News;