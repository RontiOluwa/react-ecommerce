import {combineReducers} from 'redux';
import {productReducers, selectedProductsReducer} from './productReducer'

const reducers = combineReducers({
    allProducts: productReducers,
    product: selectedProductsReducer,
})

export default reducers