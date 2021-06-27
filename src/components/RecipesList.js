import React, { useEffect, useState } from "react";
import axios from "axios";
import { setRecipe } from "../store/recipeActions";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";

const RecipeList = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [healthOption, sethealthOption] = useState("vegan");
  const [dietOption, setDietOption] = useState("balanced");


  const apiRecipesCall = async () => {
    const API_KEY = "2cb4ed6f61915e88d7d3c92051212045";
    const API_ID = "de3ec1bc";
    const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${text}&app_id=${API_ID}&app_key=${API_KEY}&diet=${dietOption}&health=${healthOption}`
    await axios
      .get(URL)
      .then((response) => {
          console.log(response.data)
        dispatch(setRecipe(response.data.hits));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => { apiRecipesCall(); }, []);

  const handleChange = event => setText(event.target.value);

  const handleSelectHealth = event =>  sethealthOption(event.target.value);
  const handleSelectDiet = event =>  setDietOption(event.target.value);


  const handleSubmit = event => {
    event.preventDefault();
    apiRecipesCall();
  };

  const healthOptions = [
    { "alcohol-free	": "Alcohol-free" },
    { "immuno-supportive": "Immune-Supportive" },
    { "celery-free": "Celery-free" },
    { "crustacean-free": "Crustcean-free" },
    { "tree-nut-free": "Tree nut free" },
    { "vegan": "Vegan" },
    { "vegetarian": "Vegetarian" },
    { "egg-free": "Egg free" },
    { "low-sugar": "No sugar" },
    { "red-meat-free": "Red meat free" },
    { "gluten-free": "Gluten free" },
    { "keto-friendly": "Keto" },

  ];
  const dietOptions = [
    { "balanced": "Balanced" },
    { "high-fiber": "High-Fiber" },
    { "high-protein": "High-Protein" },
    { "low-carb": "Low-Carb" },
    { "low-fat": "Low-Fat" },
    { "low-sodium": "Low-sodium" }
  ];

  return (
    <>
      <div>
        <h4>It's time to cook!</h4>
        <p>Search here an ingredient you want to prepare</p>

        {/* Search */}
        <form className="search-form" onSubmit={handleSubmit}>
            <select onChange={handleSelectHealth}>
                {healthOptions.map((el) => {
                    return (
                        <option value={Object.keys(el)}> {Object.values(el)} </option>
                    );
                })}
            </select>

            <select onChange={handleSelectDiet}>
                {dietOptions.map((el) => {
                    return (
                        <option value={Object.keys(el)}> {Object.values(el)} </option>
                    );
                })}
            </select>
            <input
                type="text"
                placeholder="Writte an Ingredient"
                value={text}
                onChange={handleChange}
            />
            <input type="submit" value="Search" />
        </form>

        {/* Each Recipe using Redux */}
        <div className="grid" style={styles.grid}>
           <Recipe />
        </div>
      </div>
    </>
  );
};

const styles = {};

export default RecipeList;
