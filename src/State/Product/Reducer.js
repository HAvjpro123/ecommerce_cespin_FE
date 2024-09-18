// reducer.js
import { DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FATLURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FATLURE } from "./ActionType";

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    updatedProduct: null, // Thêm vào để theo dõi sản phẩm được cập nhật
};

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case UPDATE_PRODUCT_REQUEST:
            return { ...state, loading: true, error: null };

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, loading: false, error: null, products: action.payload };
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, loading: false, error: null, product: action.payload };
        case UPDATE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, updatedProduct: action.payload }; // Cập nhật sản phẩm
        case DELETE_PRODUCT_SUCCESS:
            return { ...state, loading: false, error: null, deletedProduct: action.payload };
        case FIND_PRODUCTS_FATLURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case UPDATE_PRODUCT_FATLURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
