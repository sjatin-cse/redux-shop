import { ActionTypes } from "../constants/action-type";



export const setProducts=(product)=>{
    return{
        type : ActionTypes.SET_PRODUCTS,
        payload : product,
    };
};

export const selectedProducts=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload : product,
    };
};

export const removeSelectedProducts=(product)=>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    };
};