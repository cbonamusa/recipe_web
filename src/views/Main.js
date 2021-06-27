import React, { useEffect, useState } from "react";
import axios from "axios";

import RecipeList from "../components/RecipesList";

const Main = () => {
  return (
    <section style={{paddingTop: '80px'}}>
      <h1>The Recipe Main page</h1>
      <RecipeList />
    </section>
  );
};

export default Main;
