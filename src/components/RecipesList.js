import React, { useEffect, useState } from "react";
import axios from "axios";
import { setRecipe } from '../store/actions/recipeActions';
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";

const RecipeList = () => {
  const recipes = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const apiRecipesCall = async () => {
    const API_KEY = "2cb4ed6f61915e88d7d3c92051212045";
    const API_ID = "de3ec1bc";
    axios
      .get(
        `https://api.edamam.com/search?q=${text}&app_id=${API_ID}&app_key=${API_KEY}&health=alcohol-free`
      )
      .then((response) => {
        setData(response.data);
        dispatch(setRecipe(response.data));

      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    apiRecipesCall();
  }, []);
  console.log('recipes', recipes)

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiRecipesCall();
  };

  return (
    <>
      <div>
        <h3>All recepies here</h3>
        <form className="search" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Writte an Ingredient"
            value={text}
            onChange={handleChange}
            />
            <input type="submit" value="Search" />
        </form>

        <div className="container-grid">
          <Recipe />
        </div>

      </div>
    </>
  );
};

export default RecipeList;
