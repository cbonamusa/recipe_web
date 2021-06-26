import { ActionTypes } from "../const/actionTypes";

const initialState = {
    recipes: []
}
export const recipeReducer = (state = initialState, {type, payload}) => {
     switch (type) {
         case ActionTypes.SET_RECIPE:
             return {...state, recipes:payload};
             break;
     
         default:
            return state;
             break;
     }
}