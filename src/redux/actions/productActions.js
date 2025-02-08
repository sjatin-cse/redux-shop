import axios from "axios";
import { ActionTypes } from "../constants/action-type";

// Fetch all products
export const fetchProducts = () => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
};

// Fetch product details
export const fetchProductDetail = (id) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

// Add product to cart (Updates Quantity if already exists)
export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    };
};

// Remove one quantity from cart
export const decreaseCartQuantity = (productId) => {
    return {
        type: ActionTypes.DECREASE_CART_QUANTITY,
        payload: productId,
    };
};

// Remove entire product from cart
export const removeFromCart = (productId) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: productId,
    };
};
