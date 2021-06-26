import React from 'react';
import {useSelector} from "react-redux";

function Recipe() {
    const recipes = useSelector(state => state.allRecipes.recipes);
    //const {id, title} = recipes[0];

    return (
        <div className="recipe" style={styles.recipe}>
            <div className="recipe-card">
                <div className="recipe-card-img"></div>
                <div className="recipe-card-content">
                    <h4 className="title"></h4>
                    <p className="description"></p>
                </div>
            </div>      
        </div>
    )
}

const styles = {
 recipe: {
    padding: '8px',
    background: 'white',
    borderRadius: '8px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
 }
}

export default Recipe
