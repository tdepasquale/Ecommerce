import React from 'react';
import { CollectionItem } from './collection.item.component';
import '../componentCSS/CollectionPreview.css';

export const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.slice(0, 4).map(
                        item => <CollectionItem {...item} />
                    )
                }
            </div>
        </div>
    )
}