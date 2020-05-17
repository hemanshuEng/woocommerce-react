import React from 'react';
import './ProductCard.scss';

function ProductCard(props) {
    return (
        <div className="ProductCard">
            <img className="ProductCard__img" src={props.item.images[0].src} alt ={props.item.title}/>
            <h2 className="ProductCard__title">{props.item.name}</h2>
            <p className="ProductCard__price">£{props.item.price}</p>
        </div>
    );
}

export default ProductCard;