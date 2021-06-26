import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import RecipeList from "../components/RecipesList";

const Main = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const apiRecipesCall = async () => {
    const API_KEY = "2cb4ed6f61915e88d7d3c92051212045";
    const API_ID = "de3ec1bc";
    axios
      .get(
        `https://api.edamam.com/search?q=${text}&app_id=${API_ID}&app_key=${API_KEY}&health=alcohol-free`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    apiRecipesCall();
  }, [setText]);


  return (
    <section>
      <h1>The Recipe</h1>
      {/* <Search /> */}
      <RecipeList />
    </section>
  );
};

export default Main;
