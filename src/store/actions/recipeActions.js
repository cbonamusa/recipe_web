import {ActionTypes} from '../const/actionTypes';

export const setRecipe = (recipe) => {
    return {
        type: ActionTypes.SET_RECIPE,
        payload: recipe
    };
};

export const selectedRecipe = (recipe) => {
    return {
        type: ActionTypes.SELECTED_RECIPE,
        payload: recipe
    };
};