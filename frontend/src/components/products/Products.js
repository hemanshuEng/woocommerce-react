import { connect } from 'react-redux';
import { products } from '../../actions'
import ProductCard from "../ProductCard/ProductCard";
import React, {Component} from 'react';
import './Prodcuts.scss';
class Products extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.products(20);
    }
    render() {
        const ProductItems = this.props.product.map((item)=> {
            return <ProductCard key = {item.id}  item = {item} />
        });
        return (
            <div className="ProductContainer">
                {this.props.loading ? <h1>Loading</h1>: ProductItems}
            </div>
        );
    }
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
        products: () => dispatch(products(20))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);