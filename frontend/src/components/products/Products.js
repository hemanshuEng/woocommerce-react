import React from 'react';
import { connect } from 'react-redux';
import { products } from '../../actions'
function Products(props) {

    return (
        <div>
            <p>Hello World</p>
            <button onClick={props.products}>products</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        loading: state.Products.loading,
        product: state.Products.products,
        error : state.Products.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        products: () => dispatch(products())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);