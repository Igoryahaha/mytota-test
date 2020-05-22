import { v4 as uuidv4 } from 'uuid';
import * as productsActions from '../actions/products';
import * as productActions from '../actions/product';

export function products(state = [], action) {
    switch (action.type) {
        case productsActions.RECEIVE_PRODUCTS:
            return [...action.products];
        case productActions.SAVE_PRODUCT:
            return [
                {
                    ...action.product,
                    createdAt: new Date(),
                    featured: Number(action.product.rating) >= 8 ? true : false,
                    id: action.id ? action.id : uuidv4()
                },
                ...state.filter((item) => item.id !== action.id)
            ];
        case productActions.DELETE_PRODUCT:
            return [...state.filter((item) => item.id !== action.id)];
        default:
            return state;
    }
}

export function getProductsById(state) {
    return state.products.reduce((acc, product) => {
        return {
            ...acc,
            [product.id]: product
        };
    }, {});
}
