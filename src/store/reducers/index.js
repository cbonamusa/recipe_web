import {combineReducers} from 'redux';
import {recipeReducer} from './recipeReducer';

const reducers = combineReducers({
    allRecipes: recipeReducer,
});

export default reducers;