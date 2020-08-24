import React, { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import DietRestriction from '../components/DietRestriction.js';
import Control from '../components/Control.js';
import ServiceApi from "../services/ServiceApi.js";


export default function RecipePreferences() {
    const [title, setTitle] = useState("Menu");
    const [choosedRecipe, setchoosedRecipe] = useState(null);
    const [choosedDiet, setChoosedDiet] = useState(null);
    const [menu, setMenu] = useState();


    useEffect(() => {
        const get_menu = async () => {
            ServiceApi.retrieveMenu().then(data => {
                setMenu(data);
            })
                .catch(err => {
                    console.log(err);
                });

        };
        get_menu();
    }, []);


    const pickRecipe = (recipe) => {
        setchoosedRecipe(recipe)
    }

    const dietCLick = (diet) => {
        setChoosedDiet(diet)
    }

    const restart = () => {
        setchoosedRecipe(null);
        setChoosedDiet(null);
    }

    const replace_diet = () => {
        setChoosedDiet(null);
    }



    return (
        <div>
            <header >

                {!choosedRecipe &&
                    <div className="display-4 text-primary mt-3 mb-2">
                        {title}
                    </div>}
                <div className="display-4 text-info my-2 ">
                    {choosedRecipe?.name}
                </div>
                <div className="h4 text-info my-2 ">  {choosedDiet}</div>

            </header>
            <div className="container">
                {choosedRecipe &&
                    <div className="ml-5 text-left">
                        <button className="btn btn-primary" onClick={() => restart()} >restart</button>
                        {choosedRecipe && menu && choosedDiet &&
                            <button className="btn btn-primary" onClick={() => replace_diet()} >Replace Diet</button>}
                        {choosedRecipe && menu && choosedDiet &&
                            <button className="btn btn-primary"  >finish</button>}
                    </div>}
            </div>
            <div>
                {!choosedRecipe && menu && <Menu data={menu} pickRecipe={pickRecipe} />}
                {choosedRecipe && menu && !choosedDiet && <DietRestriction dietCLick={dietCLick} />}
                {choosedRecipe && menu && choosedDiet && <Control recipe={choosedRecipe} diet={choosedDiet} />}
            </div>
        </div>

    )
}
