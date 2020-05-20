import React from 'react';
import ShoppingCart from './../../../img/shopping-cart.svg';
import Heart from './../../../img/heart.svg';
import SearchIcon from './../../../img/search.svg';

import './SearchBar.scss';
function SearchBar() {
    return (
        <div className="SearchBar">
            <input className="SearchBar__input" type="text" placeholder="Search .."/>
            <button className="SearchBar__submit" type="submit">
                <img src={SearchIcon} alt="Search" className="SearchBar__icon"/>
            </button>
            <div className="SearchBar__cart">
                <img className="SearchBar__cart-heart" src={Heart} alt="heart"/>
                <img className="SearchBar__cart-cartIcon" src={ShoppingCart} alt="cart"/>
                <p className="SearchBar__cart-price">£100.00</p>
            </div>
        </div>
    );
}

export default SearchBar;