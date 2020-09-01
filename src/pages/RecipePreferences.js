import React, { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import DietRestriction from '../components/DietRestriction.js';
import Control from '../components/Control.js';
import ServiceApi from "../services/ServiceApi.js";
import { Spinner } from 'react-bootstrap';
// import Navigation from '../navigation.js';
import TopPanel from "../components/top-panel.js";




export default function RecipePreferences() {
    const [title, setTitle] = useState("Menu");
    const [choosedRecipe, setchoosedRecipe] = useState(null);
    const [choosedDiet, setChoosedDiet] = useState(null);
    const [showZeros, setShowZeros] = useState(false);
    const [menu, setMenu] = useState();
    const [step, setStep] = useState("menu");
    const [loadMenu, setLoadMenu] = useState(true);


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
        setLoadMenu(false);
    }, []);


    const pickRecipe = (recipe) => {
        setchoosedRecipe(recipe);
        setTitle("Diet");
        setStep("diet")
    }

    const dietCLick = (diet) => {
        setChoosedDiet(diet);
        setTitle("Dish");
        setStep("dish")



    }

    const restart = () => {
        setchoosedRecipe(null);
        setChoosedDiet(null);
        setStep("menu")

    }

    const replace_diet = () => {
        if(choosedRecipe) {
            setChoosedDiet(null);
            setStep("diet")
        }

    }


    return (
        <div>
             <TopPanel restart={restart} replace_diet={replace_diet} step={step} />
            <div className="container-fluid">

                    <header className="row  align-items-center mx-0 justify-content-between" >
                        <div style={{ color: "var(--secondary)" }}>
                         <h3>
                            { choosedRecipe && choosedRecipe.name}  {choosedDiet && '\u0026'} { choosedDiet && choosedDiet}
                         </h3>
                        
                        </div>
                        
                        <div className="display-4  my-3  align-self-center   text-uppercase font-weight-bold" style={{ color: "var(--secondary)" }}>
                            {title}
                        </div>
                        <div >
                        {choosedRecipe && choosedDiet && ''
                            }
                            </div>


                    </header>

                
            </div>
            <div>
                {!menu && <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>}
                {!choosedRecipe && menu &&
                    <Menu data={menu} pickRecipe={pickRecipe} />
                }
                {choosedRecipe && menu && !choosedDiet && <DietRestriction dietCLick={dietCLick} />}
                {choosedRecipe && menu && choosedDiet && <Control recipe={choosedRecipe} diet={choosedDiet} zeros={showZeros} />}
            </div>
        </div>

    )
}
