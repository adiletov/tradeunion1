import axiosApi from "../../axiosApi";
import {ORDER_CATEGORY_PUBLICATIONS_SUCCESS, ORDER_NEW_CATEGORY_ERROR, ORDER_NEW_CATEGORY_SUCCESS} from "./actionsType";

export const orderCategoryError = () => ({type: ORDER_NEW_CATEGORY_ERROR});

export const orderCategorySuccess = categories => ({type: ORDER_NEW_CATEGORY_SUCCESS, categories});
export const orderCategoryIdPublications = publications => ({type: ORDER_CATEGORY_PUBLICATIONS_SUCCESS, publications})

export const addCategory = category => {
    return async (dispatch)=>{
        try{
            await axiosApi.post('/category', category);
            dispatch(getCategories())
        }catch (e) {
            dispatch(orderCategoryError())
        }
    }
};

export const getCategories = () => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/category');
            dispatch(orderCategorySuccess(res.data))
        }catch (e) {
            dispatch(orderCategoryError())
        }
    }
};


export const getPublicationsId = (id) => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi('/category/'+ id);
            dispatch(orderCategoryIdPublications(res.data))
        }catch (e) {
            dispatch(orderCategoryError())
        }
    }
};

export const deletePublications = id => {
    return async (dispatch)=>{
        try{
            await axiosApi.delete('/category/'+ id)
        }catch (e) {
            dispatch(orderCategoryError())
        }
    }
}