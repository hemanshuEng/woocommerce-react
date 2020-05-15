import { LIST_PRODUCTS_REQUEST,
        LIST_PRODUCTS_SUCCESS,
        LIST_PRODUCTS_ERROR } from "../actiontypes/ProductActions";


const initialState = {
    loading:false,
    products:[],
    error: ''
};

const Products = (state = initialState , action) =>{
    switch(action.type){
        case LIST_PRODUCTS_REQUEST :
            return {
                ...state,
                loading: true,
            }
        case LIST_PRODUCTS_SUCCESS :
            return {
                ...state,
                loading :false,
                products :action.payload
            }
        case LIST_PRODUCTS_ERROR :
            return {
                ...state,
                loading :false,
                products :action.payload
            }
        default:
            return state;
    }
}

export default Products;