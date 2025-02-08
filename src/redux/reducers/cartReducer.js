import { ActionTypes } from "../constants/action-type";

const initialState = {
    items: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART: {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                // Increase quantity if item is already in cart
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity + action.payload.quantity,
                              }
                            : item
                    ),
                };
            } else {
                // Add new item with quantity
                return {
                    ...state,
                    items: [
                        ...state.items,
                        {
                            ...action.payload,
                            quantity: action.payload.quantity,
                        },
                    ],
                };
            }
        }

        case ActionTypes.DECREASE_CART_QUANTITY: {
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload
                        ? {
                              ...item,
                              quantity:
                                  item.quantity > 1 ? item.quantity - 1 : 1,
                          }
                        : item
                ),
            };
        }

        case ActionTypes.REMOVE_FROM_CART: {
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        }

        default:
            return state;
    }
};

export default cartReducer;
