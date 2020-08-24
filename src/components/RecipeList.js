import React, { Component } from 'react';


class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // const displayRecipes = 
        // );


        return <div className="card-deck">{
            this.props.recipes.filter(item =>
                item.name.toLowerCase().match(this.props.filterRecipe.toLowerCase())
            ).map((item) => 
                <div className="col-lg-3 col-md-4 col-sm-6  col-12" key={item.id} >
                    <div className="card my-3" >
                        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                             lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                <button type="button" className="btn btn-info" onClick={() => this.props.choosenRecipe(item)}>Cook</button>
                            </small>
                        </div>
                    </div>
                </div>
            
            )
        }</div>
    }
}

export default RecipeList;