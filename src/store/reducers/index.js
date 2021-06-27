import {combineReducers} from 'redux';
import {recipeReducer, selectedRecipeReducer} from './recipeReducer';

const reducers = combineReducers({
    allRecipes: recipeReducer,
    recipe: selectedRecipeReducer,
});

export default reducers;