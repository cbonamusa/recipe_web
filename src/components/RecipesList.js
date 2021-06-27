import React, { useEffect, useState } from "react";
import axios from "axios";
import { setRecipe } from "../store/actions/recipeActions";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";
import { findByLabelText } from "@testing-library/dom";

const RecipeList = () => {
  const recipes = useSelector((state) => state.allRecipes.recipes);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [dataRecipes, setDataRecipes] = useState([]);
  const [option, setOption] = useState("vegan");

  const apiRecipesCall = async () => {
    const API_KEY = "2cb4ed6f61915e88d7d3c92051212045";
    const API_ID = "de3ec1bc";
    const URL = `https://api.edamam.com/search?q=${text}&app_id=${API_ID}&app_key=${API_KEY}&health=${option}`;
    await axios
      .get(URL)
      .then((response) => {
        setDataRecipes(response.data.hits);
        console.log(URL);
        console.log(response.data.hits)
        // dispatch(setRecipe(response.data.hits));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => { apiRecipesCall(); }, []);

  const handleChange = event => setText(event.target.value);

  const handleSelect = event =>  setOption(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    apiRecipesCall();
  };

  const selOptions = [
    { "vegan": "Vegan" },
    { "vegetarian": "Vegetarian" },
    { "peanut-free": "Peanut free" },
    { "soy-free": "Soy Free" },
    { "tree-nut-free": "Tree nut free" },
    { "high-protein": "Hight Protein" },
    { "low-carb": "Low Carb" },
    { "egg-free": "Egg free" },
    { "low-sugar": "No sugar" },
    { "red-meat-free": "Red meat free" },
    { "gluten-free": "Gluten free" },
  ];

  return (
    <>
      <div>
        <h4>It's time to cook!:</h4>
        <p>Search here an ingredient you want to prepare</p>

        {/* Search */}
        <form className="search-form" onSubmit={handleSubmit}>
          <select onChange={handleSelect}>
            {selOptions.map((el) => {
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

        {/* Each item / Recipe */}
        <div className="grid" style={styles.grid}>
          {dataRecipes.map((recipe, i) => {
            return (
              <Recipe recipe={recipe} key={i} />
            );
          })}
        </div>
      </div>
    </>
  );
};

const styles = {};

export default RecipeList;
