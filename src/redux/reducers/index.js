import {combineReducers} from 'redux';
import {productReducers, selectProductsReducer} from './productReducers';
 

const reducers=combineReducers({
    allProducts:productReducers,
    product: selectProductsReducer,
});

export default reducers;    