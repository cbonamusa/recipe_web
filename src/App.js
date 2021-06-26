import './scss/app.scss';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Header from "./components/Header";
import RecipeView from './views/RecipeView';
import Main from "./views/Main";


function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
            <Route exact path="/"  component={Main} />
            <Route path="/recipe/:recipeId" exact component={RecipeView} />
            <Route>404 - Sorry, Page not found</Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
