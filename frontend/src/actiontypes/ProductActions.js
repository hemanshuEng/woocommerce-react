import axios from 'axios';
import crypto from 'crypto';
import OAuth from 'oauth-1.0a';


export const LIST_PRODUCTS_REQUEST = 'LIST_PRODUCTS_REQUEST';
export const LIST_PRODUCTS_SUCCESS = 'LIST_PRODUCTS_SUCCESS';
export const LIST_PRODUCTS_ERROR = 'LIST_PRODUCTS_ERROR';

axios.defaults.baseURL = 'http://localhost/wp-json/wc/v3';
const oauth = OAuth({
    consumer: { key:process.env.REACT_APP_CONSUMER_KEY , secret:process.env.REACT_APP_CONSUMER_SECRET },
    signature_method: process.env.REACT_APP_SIGNATURE_METHOD,
    hash_function(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
})
const request = {
    url: 'http://localhost/wp-json/wc/v3/products',
    method: 'GET',
};
let header =  oauth.authorize(request);
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

export const products = () =>{
    return (dispatch) => {
        dispatch(productsListRequest())
        axios.get('/products',{
            headers: oauth.toHeader(header)
            })
        .then(response => {
                const products = response.data;
                dispatch(productsListSuccess(products))
        }
        )
        .catch(error => productsListError(error.response.data))
    }
}