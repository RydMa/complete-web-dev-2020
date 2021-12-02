import React from 'react';

import './menu-item.styles.scss';

import {  useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('shop')
    }

    return (
        <div
            className={`${size} menu-item`}
            onClick={handleClick}
        >
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default MenuItem
