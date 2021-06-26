import React, { useContext, createContext, useEffect ,useState} from "react";
import axios from 'axios';

export const Context = createContext();
export const ContextProvider = (props) => {
  const API_KEY = "2cb4ed6f61915e88d7d3c92051212045";
  const API_ID = "de3ec1bc"
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    )
    .then(response => setData(response.data))
    .catch(error => console.error(error))
  }, [])
  return (
    <Context.Provider value={{data}}>
      {props.children}
    </Context.Provider>
  );
};
