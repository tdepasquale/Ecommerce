import React from 'react';
import '../componentCSS/CategorySection.css';

export const CategorySection = (props) => {
    let classes = "item text-center ";
    props.section.size === "large" ? classes += "large-size" : classes += "normal-size";

    let contentStyle = {
        backgroundImage: 'url(' + props.section.imageUrl + ')'
    };

    return (
        <div className={classes}>
            <div style={contentStyle} className="content">
                <div className="textBox">
                    <h1 className="title">{props.section.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    )
};