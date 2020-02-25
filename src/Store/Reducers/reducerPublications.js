import {ORDER_ALL_PUBLICATIONS_SUCCESS, ORDER_PUBLICATION_SUCCESS} from "../Actions/actionsType";

const initialState={
  publications: null,
  allPublications: [],
};

const reducerPublications = (state = initialState, action)=>{
    switch (action.type) {
        case ORDER_PUBLICATION_SUCCESS:
            return {...state, publications: action.publications};
        case ORDER_ALL_PUBLICATIONS_SUCCESS:
            return {...state, allPublications: action.publications};
        default:
                return state
    }
};

export default reducerPublications;