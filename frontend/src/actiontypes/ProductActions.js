import WoocommerceApi from "../WoocommerceApi";

export const LIST_PRODUCTS_REQUEST = 'LIST_PRODUCTS_REQUEST';
export const LIST_PRODUCTS_SUCCESS = 'LIST_PRODUCTS_SUCCESS';
export const LIST_PRODUCTS_ERROR = 'LIST_PRODUCTS_ERROR';

const woocommerce = new WoocommerceApi();

 const productsListRequest = () =>{
    return {
        type: LIST_PRODUCTS_REQUEST,
    }
}

 const productsListSuccess = (products) =>{
    return {
        type: LIST_PRODUCTS_SUCCESS,
        payload: products
    }
}

 const productsListError = (error) =>{
    return {
        type: LIST_PRODUCTS_ERROR,
        payload: error
    }
}

export const products = (param) =>{
    return (dispatch) => {
        dispatch(productsListRequest())
        woocommerce.get('/products',param)
        .then(response => {
                const products = response.data;
                dispatch(productsListSuccess(products))
        }
        ).catch(error => {
            dispatch(productsListError(error.response.data))
        })
    }
}