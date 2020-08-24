import React, { Component } from 'react';
import RecipeList from '../components/RecipeList.js';
import DietRestriction from '../components/DietRestriction.js';
import RecipeControl from '../components/RecipeControl';
import { FaUndo } from 'react-icons/fa';



class RecipePreferences extends Component {

    constructor() {
        super();
        this.state = {
            myName: 'Noam',
            recipes: [],
            choosedRecipe: null,
            choosedDeit: '',
            searchQuery: '',
            myrecipes: [] ,
        }

        this.handleChange = this.handleChange.bind(this);
    }



    componentDidMount() {
          fetch('/recipes/')
          .then(response => response.json())
          .then(data => this.setState({ recipes: data }));

      }


    pickRecipe = (recipe) => {
        // console.log(recipe)
        this.setState({ choosedRecipe: recipe });
    }

    daitCLick = (deit) => {
        this.setState({ choosedDeit: deit });
    }


    // async componentDidMount() {

    // }
    handleChange(e) {

        const itemName = e.target.name;
        const itemVal = e.target.value;

        this.setState({ [itemName]: itemVal });

    }

    resetQuery() {
        this.setState({
            searchQuery: ''
        });
    }


    render() {
        return (
            <div>
                <div className="display-3 text-primary my-4 ">
                    Recipe Preferences
                </div>
                <div className="container">
                    {this.state.choosedRecipe === null &&
                        <div>
                            <div className="input-group input-group=lg">
                                <input type="text" name="searchQuery" placeholder="seach recipe..."
                                    className="form-control" value={this.state.searchQuery} onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-outline-info" title="Reset search" onClick={() => this.resetQuery()}>
                                        <FaUndo />
                                    </button>
                                </div>
                            </div>
                            <RecipeList recipes={this.state.recipes} filterRecipe={this.state.searchQuery} choosenRecipe={this.pickRecipe} />
                        </div>}

                    {this.state.choosedRecipe != null && <div className="display-4 text-info my-2 ">{this.state.choosedRecipe.name}</div>}
                    {this.state.choosedDeit !== '' && <div className="h4 text-info my-2 ">{this.state.choosedDeit}</div>}
                    {this.state.choosedRecipe != null &&
                        this.state.choosedDeit === '' &&
                        <DietRestriction daitCLick={this.daitCLick} />}
                    {this.state.choosedRecipe != null &&
                        this.state.choosedDeit !== '' &&
                        <RecipeControl recipe={this.state.choosedRecipe} />}

                </div>
            </div>

        )
    }
}

export default RecipePreferences;