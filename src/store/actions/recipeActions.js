import types from "../const/types";

export const setRecipe = (recipes) => {
    return {
        type: types.SET_RECIPES,
        payload: recipes
    };
};

export const selectedRecipe = (recipes) => {
    return {
        type: types.SELECTED_RECIPE,
        payload: recipes
    };
};