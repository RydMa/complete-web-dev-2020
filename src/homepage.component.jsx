import React from 'react';

import './homepage.styles.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <div className="subtitle">SHOP NOW</div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <div className="subtitle">SHOP NOW</div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <div className="subtitle">SHOP NOW</div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMNENS</h1>
                        <div className="subtitle">SHOP NOW</div>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <div className="subtitle">SHOP NOW</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
