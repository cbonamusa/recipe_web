import React from "react";
import noimage from "../assets/noimage.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Recipe() {
  const storeRecipes = useSelector((state) => state.allRecipes.recipes);
  const renderRecipes = storeRecipes.map((element, i) => {
      const { image, label, cuisineType, dishType } = element['recipe'];
      const { href } = element['_links']['self'];
      const id = href.substring(href.lastIndexOf('/') + 1);
    return (
      <div className="recipe" style={styles.recipe} key={i}>
        <Link to={`/recipe/${id}`}>
        <div className="recipe-card">
          <div className="recipe-card-img">
            {image.match(/.*\.(gif|jpe?g|bmp|png)$/) != null ? 
                (<img src={image} alt="recipe" style={styles.recipe.image}/>) : 
                (<img src={noimage} alt="recipe" style={styles.recipe.image} />)
            }
          </div>
          <div className="recipe-card-content">
            <h3 className="title">{label}</h3>
            <p className="type"><b>Type of Dish: </b>{cuisineType}</p>
            <p className="type"><b>Cathergory: </b> {dishType}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return (
    <>
        {renderRecipes}
    </>
  )
}

const styles = {
  recipe: {
    padding: "8px",
    background: "white",
    borderRadius: "8px",
    maxWidth: "220px",
    margin: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    image: {
      height: "220px",
      width: "220px",
    },
  },
};

export default Recipe;
