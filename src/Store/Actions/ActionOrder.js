import axiosApi from "../../axiosApi";
import {ORDER_ALL_PUBLICATIONS_SUCCESS, ORDER_PUBLICATION_ERROR, ORDER_PUBLICATION_SUCCESS} from "./actionsType";



export const orderPublicationError = ()=> ({type: ORDER_PUBLICATION_ERROR});
export const orderPublicationsSuccess = publications => ({type: ORDER_PUBLICATION_SUCCESS, publications});
export const orderAllPublications = publications => ({type: ORDER_ALL_PUBLICATIONS_SUCCESS, publications});

export const requestPublication = (file) => {
    return async (dispatch) => {
        try{
            await axiosApi.post(`/tradeunion`, file)
        }catch (e) {
            dispatch(orderPublicationError())
        }
    }
};

export const getCategoryInfo = id => {
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/tradeunion/'+id);
            dispatch(orderPublicationsSuccess(res.data))
        }catch (e) {
            dispatch(orderPublicationError())
        }
    }
};

export const getAllPublications = ()=>{
    return async (dispatch)=>{
        try{
            const res = await axiosApi.get('/tradeunion');
            dispatch(orderAllPublications(res.data))
        }catch (e) {
            dispatch(orderPublicationError())
        }
    }
};