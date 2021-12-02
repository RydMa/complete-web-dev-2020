import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price, route}) => {
    return (
        <div className="collection-item">
            <img src={imageUrl} alt="colection-item-thumbnail" className="image" />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;