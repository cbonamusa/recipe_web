import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedRecipe } from "../store/actions/recipeActions";

function RecipeView() {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const storeRecipe = useSelector((state) => state.recipe);
  const { image, ingredientLines, ingredients, label, mealType, cuisineType,  dishType } = storeRecipe;
 console.log(storeRecipe)
  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=de3ec1bc&app_key=2cb4ed6f61915e88d7d3c92051212045`
    );
    const json = await response.json();
    dispatch(selectedRecipe(json.recipe));
  };

  useEffect(() => {
    if (recipeId && recipeId != "") {
      fetchRecipe();
    }
  }, [recipeId]);

  return (
    <div style={styles.recipePage}>
      <h3 className="title">Recipe Information</h3>
      <div className="recipe">
        <h2>{label}</h2>
        <div className="image">
          <img src={image} alt="image" />
        </div>
        <div>
            {/* <ul> {ingredientsLines.map(el => <li key={el.foodId}>{el}</li>)}</ul> */}
        </div>
        <p><b>Cuisine Type:</b> {cuisineType}</p>
        <p><b>Best for: </b>{mealType}</p>
        <p><b>Type of dish:</b> {dishType}</p>
      </div>
    </div>
  );
}

const styles = {
  recipePage: {
    padding: "80px 20px",
  },
};
export default RecipeView;
