import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from '../components/RadaerByData.js'
import AmountSlider from '../components/AmountsSlider.js'



export default function Process() {
    const [title, setTitle] = useState("Process");
    const [pickedRecipe, setPickedRecipe] = useState();
    const [ingredients, setIngredients] = useState([]);
    const [dynamicIngredients, setDynamicIngredients] = useState([]);
    const [aromas, setAromas] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);


    const get_recipe = () => {
        axios.get('recipes/1/').then(res => {
            setTitle(res.data.name);
            setPickedRecipe(res.data);
            setIngredients(res.data.recipe_ing);
            setDynamicIngredients(res.data.recipe_ing);
        })
            .catch(err => {
                console.log(err);
            });

    };

    useEffect(() => {
        get_recipe();
        SetIsLoading(false)
    }, []);

    // const get_aromas = async () => {
    //     let aromas = [];
    //     await axios.all(
    //         Object.entries(ingredients).map(ing =>
    //             axios.get('aromas/' + ing[1].entity_id + '/')
    //         )
    //     ).then(axios.spread((...respones) => {
    //         for (const res of respones) {
    //             aromas = [...aromas, res.data]
    //         }
    //     })).catch(error => console.log(error));
    //     setAromas(aromas);
        
    // }

    // useEffect(() => {
    //     get_aromas();
    //     SetIsLoading(false)
    // }, [ingredients]);


    const handleIngValChange = (val, id) => (
        setDynamicIngredients(
            dynamicIngredients.map(ing =>
                ing.id === id
                    ? { ...ing, kosher_value: val }
                    : ing)
        )
    )

    function noramlize_value(val, min, max) {
        return (val * (max - min) + min).toFixed(1)
    }

   
    return (
        <div className="container">
            <div className="display-4 text-primary my-4">
                {title} Page
            </div>
            <ul>
                {
                    dynamicIngredients.map(ing =>
                        // <Ingredient_li ing={ing} key={ing.id} />
                        <li className="list-group-item d-flex justify-content-between align-items-center " key={ing.id}>
                            {noramlize_value(ing.kosher_value , ing.min , ing.max)}g {ing.name}
                            <AmountSlider ingredient={ing}
                                onChange={(val) => handleIngValChange(val, ing.id)}
                            />
                        </li>
                    )
                }

            </ul>
            <div>
                { !isLoading && 
                        < Chart ingredientValues={dynamicIngredients} />    
                }
            </div>
        </div>
    );
};