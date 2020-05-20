import React from 'react';
import ProductSidebar from "../ProductSideBar/ProductSidebar";
import Products from "../products/Products";
import './ProductsContainer.scss';
function ProductsContainer(props) {
    return (
        <div className="productcontainer">
            <ProductSidebar/>
            <Products />
        </div>
    );
}

export default ProductsContainer;