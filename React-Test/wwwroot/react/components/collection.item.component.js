import React from 'react';
import '../componentCSS/CollectionItem.css';

export const CollectionItem = ({ id, name, price, imageUrl}) => {
    return (
        <div key={id} className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="add-to-cart-button">
                    <span className="button-text">ADD TO CART</span>
                </div>
            </div>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
        )
}