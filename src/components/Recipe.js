import React from 'react';
import image from '../assets/noimage.png';
import {useSelector} from "react-redux";

function Recipe({recipe}) {
    const storeRecipes = useSelector(state => state.allRecipes.recipes);
    //const {id, title} = recipes[0];

    return (
        <div className="recipe" style={styles.recipe}  >
            <div className="recipe-card">
                <div className="recipe-card-img">
                    {(recipe["recipe"]["image"].match(/.*\.(gif|jpe?g|bmp|png)$/) != null) ?
                        ( <img src={recipe["recipe"]["image"]} style={styles.recipe.image}/>) : 
                        ( <img src={image} style={styles.recipe.image}/>)
                    }
                </div>
                <div className="recipe-card-content">
                    <h4 className="title">{recipe["recipe"]["label"]}</h4>
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
        maxWidth: '220px',
        margin: '8px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        image: {
            height: '220px',
            width: '220px'
        }
    }
}

export default Recipe
