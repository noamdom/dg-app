import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import RecipePage from '../pages/RecipePage.js';
import IngredientPage from '../pages/IngredientPage.js';
import Tests from '../pages/Tests.js';
import Process from '../pages/Process.js';
import RecipePreferences from '../pages/RecipePreferences.js';
import NotFound from '../pages/NotFoundPage'
import '../css/App.css';
import Navigation from '../navigation.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      myName: 'Noam',
    }
  }

  


  render() {
    


    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route path="/" component={HomePage} exact />
            {/* <Route path="/recipe" component={RecipePage} /> */}
            <Route path="/ingredient" component={IngredientPage} />
            <Route path="/recipe-preferences" component={RecipePreferences} />
            {/* <Route path="/process" component={Process} /> */}
            <Route path="/tests" component={Tests} />
            <Route component={NotFound}  />
          </Switch>
        </div>
       </Router>

    );
  }


}

export default App;
