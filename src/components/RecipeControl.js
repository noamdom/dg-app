import React, { Component } from 'react';
import AmountSlider from './AmountsSlider.js'
// import Chart from '../components/BasicChart.js'
// import ChartLine from '../components/BasicChart-Line'



class RecipeControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 50,
            ingredients_urls: this.props.recipe.ingredients,
            ingredients : [],
        }

       



    }


    handleChange = (val) => {
        this.setState({ amount: val });
    }









    render() {
        
        // let tmp_ingredients = []
        // for (const url of this.state.ingredients_urls) {
        //     let fix_url = url.slice(-15);
            
        //     fetch(fix_url).then(response => response.json())
        //         .then(ingred => tmp_ingredients = [...tmp_ingredients, ingred])
        // }
        // this.setState({ingredients : tmp_ingredients})


        return (
            <div className="row"> 
                <ul className="col-sm list-group">
                   

                    <li className="list-group-item   justify-content-between align-items-center">
                    {this.state.amount}g sugar
                            <AmountSlider qty = {this.state.amount} onChange ={(val) => this.handleChange(val)} />
                    </li>

                </ul>
                {/* <div className="col-sm">
                    <Chart urlData={"/aromas/1/"} />
                    <ChartLine urlData={"/aromas/1/"} /> 
                </div> */}
            </div>
        );

    }
}


export default RecipeControl;