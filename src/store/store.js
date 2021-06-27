import {createStore, combineReducers} from 'redux';
import types from "./reciptTypes";

const initialState = {
    recipes: [],
}
export const recipeReducer = (state = initialState, {type, payload}) => {
     switch (type) {
         case types.SET_RECIPES:
             return {...state, recipes:payload};
         default:
            return state;
     }
}
export const selectedRecipeReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case types.SELECTED_RECIPE:
            return {...state, ...payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    allRecipes: recipeReducer,
    recipe: selectedRecipeReducer,
});

const store = createStore(
    reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__() && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
