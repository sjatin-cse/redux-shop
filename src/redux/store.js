import { configureStore } from '@reduxjs/toolkit';
import productReducers from './reducers/productReducers';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
    reducer: {
        products: productReducers,
        cart: cartReducer
    }
});

export default store;
