import {ORDER_CATEGORY_PUBLICATIONS_SUCCESS, ORDER_NEW_CATEGORY_SUCCESS} from "../Actions/actionsType";

const initialState = {
    categories: null,
    categoryIdInfo: null
};

const reducerCategory = (state = initialState, action)=>{
    switch (action.type) {
        case ORDER_NEW_CATEGORY_SUCCESS:
            return {...state, categories: action.categories};
        case ORDER_CATEGORY_PUBLICATIONS_SUCCESS:
            return {...state, categoryIdInfo: action.publications};
        default:
            return state
    }
};

export default reducerCategory;