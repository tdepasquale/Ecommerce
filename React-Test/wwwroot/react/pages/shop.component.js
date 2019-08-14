import React from 'react';
import { SHOP_DATA } from './shop.data.js';
import { CollectionPreview } from '../components/collection.preview.component';
import '../componentCSS/ShopContainer.css';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-container">
                    <h1 className="shop-title">Collections</h1>
                {
                    collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
                }
            </div>
        );
    }
}

export default ShopPage;