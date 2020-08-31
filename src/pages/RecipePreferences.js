import React, { useState, useEffect } from "react";
import Menu from '../components/Menu.js';
import DietRestriction from '../components/DietRestriction.js';
import Control from '../components/Control.js';
import ServiceApi from "../services/ServiceApi.js";
import { Spinner } from 'react-bootstrap';



export default function RecipePreferences() {
    const [title, setTitle] = useState("Menu");
    const [choosedRecipe, setchoosedRecipe] = useState(null);
    const [choosedDiet, setChoosedDiet] = useState(null);
    const [showZeros, setShowZeros] = useState(false);
    const [menu, setMenu] = useState();
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
    }

    const dietCLick = (diet) => {
        setChoosedDiet(diet);
        setTitle("Dish");


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
            <div className="container">

                    <header className="row  align-items-center mx-0 justify-content-between" >
                        <div style={{ color: "var(--secondary)" }}>
                        {choosedRecipe && choosedDiet &&
                         <h3>
                            {choosedRecipe.name} & {choosedDiet}
                         </h3>
                        }    
                        
                        </div>
                        
                        <div className="display-4  my-3  align-self-center   text-uppercase font-weight-bold" style={{ color: "var(--secondary)" }}>
                            {title}
                        </div>
                        <div >
                        {choosedRecipe && choosedDiet && ''
                            }
                            </div>


                    </header>

                    {/* {choosedRecipe &&
                        <div className="col-8 d-flex justify-content-center align-items-center ">
                            <button className="btn btn-primary mr-2" onClick={() => restart()} >restart</button>
                            {choosedRecipe && menu && choosedDiet &&
                                <button className="btn btn-primary mr-2" onClick={() => replace_diet()} >Replace Diet</button>}
                            {choosedRecipe && menu && choosedDiet &&
                                <button className="btn btn-primary mr-2"
                                    onClick={() => setShowZeros(!showZeros)}
                                >
                                    {showZeros ? 'Hide ' : 'Show '}Zeros
                                </button>}
                            {choosedRecipe && menu && choosedDiet &&
                                <button className="btn btn-primary mr-2"  >finish</button>}
                        </div>
                    } */}
                
            </div>
            <div>
                {loadMenu && <div className="d-flex justify-content-center">
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
