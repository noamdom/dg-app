import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from '../pages/HomePage.js';
// import IngredientPage from '../pages/IngredientPage.js';
import Tests from '../pages/Tests.js';
// import Process from '../pages/Process.js';
import RecipePreferences from '../pages/RecipePreferences.js';
import NotFound from '../pages/NotFoundPage'
import '../css/App.css';
// import Navigation from '../navigation.js';

class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     myName: 'Noam',
  //   }
  // }

  


  render() {
    


    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={RecipePreferences} exact />
            {/* <Route path="/home" component={HomePage}  /> */}
            {/* <Route path="/ingredient" component={IngredientPage} /> */}
            <Route path="/tests" component={Tests} />
            <Route component={NotFound}  />
          </Switch>
        </div>
       </Router>

    );
  }


}

export default App;
