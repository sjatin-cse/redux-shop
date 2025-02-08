import { ActionTypes } from '../constants/action-type';

const initialState = {
    items: [],
    selectedProduct: {}
};

// ✅ Handle fetching and selecting products
export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, items: action.payload };

        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, selectedProduct: action.payload };

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { ...state, selectedProduct: {} };

        default:
            return state;
    }
};

export default productReducers;
