import React, { useState, useEffect } from "react";
import RadarChart from '../components/RadaerByData.js'
import LineChart from '../components/BasicChart.js'
import AmountSlider from '../components/AmountsSlider.js'
import ServiceApi from "../services/ServiceApi.js";
import { Button, Collapse, Card } from 'react-bootstrap';
import { groupBy } from 'lodash';



var category = '';

function customDietName(param) {
    if (param === "Kosher") {
        return "KOSHER";
    } else if (param === "Katogenic") {
        return "KETOGENIC";
    } else {
        return "VEGAN"
    }
}


function noramlize_value(val, min, max) {
    return (val * (max - min) + min).toFixed(1)
}


function aroma_score(aroma_intensity, ing_factor) {
    return aroma_intensity * ing_factor;
}


function taste_score(taste_intensity, ing_factor) {
    return taste_intensity * ing_factor;
}

function env_impact_score(env_score, ing_factor, convertor) {
    return env_score * ing_factor * convertor;
}




export default function Control(props) {
    const [title, setTitle] = useState("Process");
    const [pickedRecipe, setPickedRecipe] = useState(props.recipe);
    const [pickedDiet, setPickedDiet] = useState(customDietName(props.diet));
    const [ingredients, setIngredients] = useState([]);
    const [dynamicIngredients, setDynamicIngredients] = useState([]);
    const [aromas, setAromas] = useState();
    const [tastes, setTastes] = useState();
    const [open, setOpen] = useState(false);
    const [openDic, setOpenDic] = useState({});


    // const [landUse, setLandUse] = useState();
    // const [ghg, setGhg] = useState();
    // const [totalLandUse, setTotalLandUse] = useState(0)
    // const [totalGhg, setTotalGhg] = useState(0)

    const [isLoading, SetIsLoading] = useState(true);
    const [metaRecipe, setMetaRecipe] = useState()
    const [envImpactAvgMetaReicpe, setEnvImpactAvgMetaReicpe] = useState()
    const [envImpact, setEnvImpact] = useState()




    const get_recipe = () => {
        ServiceApi.retrieveRecipe(pickedRecipe.id).then(data => {
            setMetaRecipe(data)
            setTitle(data.name);
            setEnvImpactAvgMetaReicpe(data.env_impact_avg)
            setPickedRecipe(data);

            // find the choosed recipe
            for (const recipe of data.recipes) {
                if (recipe.diet == pickedDiet) {
                    setIngredients(groupBy(recipe.ingredients, "category"));
                    setDynamicIngredients(recipe.ingredients);


                }
            }


        })
            .catch(err => {
                console.log(err);
            });

    };


    useEffect(() => {
        get_recipe();
        get_category_titles()

    }, []);


    const calculate_aromas_avarge = () => {
        const aromas_avg = {};
        const avg_factor = 1 / dynamicIngredients.length;

        dynamicIngredients.map(ing => {
            if (ing.value > 0) {
                let factor = noramlize_value(ing.value, ing.min, ing.max);

                // filter out none arome data:
                let { entity_id, entity_alias_readable, ...aromaVals } = ing.aromas;

                // analyze avg data
                for (const [key, val] of Object.entries(aromaVals)) {
                    if (key in aromas_avg) {
                        aromas_avg[key] += (aroma_score(val, factor) * avg_factor);
                    } else {
                        aromas_avg[key] = aroma_score(val, factor) * avg_factor
                    }
                }
            }
        });
        setAromas(aromas_avg);
    };



    const calculate_taste_avarge = () => {
        const taste_avg = {};
        const avg_factor = 1 / dynamicIngredients.length;

        dynamicIngredients.map(ing => {
            if (ing.value > 0) {
                let factor = noramlize_value(ing.value, ing.min, ing.max);

                // filter out none arome data:
                let { entity_id, taste_name, ...taste_vals } = ing.tastes;

                // analyze avg data
                for (const [key, val] of Object.entries(taste_vals)) {
                    if (key in taste_avg) {
                        taste_avg[key] += (taste_score(val, factor) * avg_factor);
                    } else {
                        taste_avg[key] = taste_score(val, factor) * avg_factor
                    }
                }
            }
        });
        setTastes(taste_avg);
    };




    const calculate_env_impact_avarge = () => {
        if (envImpactAvgMetaReicpe) {


            // init dict for new Environmental Impact score
            const env_impact = {
                "land_use": 0,
                "ghg": 0,
                "acid": 0,
                "eutrophy": 0,
                "freshwater": 0,
            }


            // culclate by new value
            dynamicIngredients.map(ing => {
                if (ing.value > 0) {
                    let factor = noramlize_value(ing.value, ing.min, ing.max);
                    let env_impact_data = ing.env_impact;

                    env_impact['land_use'] += env_impact_score(env_impact_data.land_use, factor, ing.unit_convertor_g)
                    env_impact['ghg'] += env_impact_score(env_impact_data.ghg_emissions, factor, ing.unit_convertor_g);
                    env_impact['acid'] += env_impact_score(env_impact_data.acidifying_emissions, factor, ing.unit_convertor_g);
                    env_impact['eutrophy'] += env_impact_score(env_impact_data.eutrophying_emissions, factor, ing.unit_convertor_g);
                    env_impact['freshwater'] += env_impact_score(env_impact_data.freshwater_withdrawals, factor, ing.unit_convertor_g);
                }
            });

            // send the result
            setEnvImpact(env_impact)
        }

    };

    const get_category_titles = () => {
        let category_dic = {}

        if (ingredients.length !== 0) {
            for (const cat_t of Object.keys(ingredients)) {
                category_dic[cat_t] = false;
            }
            setOpenDic(category_dic);

        }
    }


    useEffect(() => {
        calculate_aromas_avarge();
        calculate_taste_avarge();
        calculate_env_impact_avarge();
        SetIsLoading(false);

    }, [dynamicIngredients, metaRecipe])


    const handleIngValChange = (val, id) => (
        setDynamicIngredients(
            dynamicIngredients.map(ing =>
                ing.id === id
                    ? { ...ing, value: val }
                    : ing)
        )
    )




    // const dd = metaRecipe.recipes[0];
    return (
        <div className="container text-left ">

            {/* <div><pre>{ metaRecipe && JSON.parse(metaRecipe, null, 2)}</pre></div> */}

            <div className="row">

                {/* { dynamicIngredients && console.log(groupBy(dynamicIngredients , "category" )) } */}
                <div className="col-md-4">
                    <ul>
                        <li className="list-group-item d-flex justify-content-between align-items-center ">
                            <button type="button" className="btn btn-info " >Show zeros</button>
                            <button type="button" className="btn btn-info " >Hide zeros</button>
                        </li>

                    </ul>
                    {
                        ingredients && Object.entries(ingredients).map(([cat, val]) => {

                            return (



                                <Card key={cat}>

                                    <Card.Header className="list-group-item d-flex justify-content-between align-items-center text-capitalize bg-light"
                                        onClick={() => setOpenDic(openDic => ({
                                            ...openDic,
                                            [cat]: !openDic[cat]
                                        }))}
                                        aria-controls={cat}
                                        aria-expanded={openDic[cat]}
                                        key={cat}
                                    >
                                        {cat}
                                    </Card.Header >
                                    <Collapse in={openDic[cat]}>

                                        <ul id={cat} className="list-group list-group-flush">
                                            {
                                                val.map(ing =>
                                                    <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize" key={ing.id}>
                                                        {noramlize_value(ing.value, ing.min, ing.max)}g {ing.name}
                                                        <AmountSlider ingredient={ing}
                                                            onChange={(val) => handleIngValChange(val, ing.id)}
                                                        />
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </Collapse>



                                </Card>
                            )
                        }
                        )
                    }

                    <ul >


                        {/* {
                            // dynamicIngredients && groupBy(dynamicIngredients , "category" ).map(cat => {
                            dynamicIngredients && dynamicIngredients.map(ing =>
                                <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize" key={ing.id}>
                                    {noramlize_value(ing.value, ing.min, ing.max)}g {ing.name}
                                    <AmountSlider ingredient={ing}
                                        onChange={(val) => handleIngValChange(val, ing.id)}
                                    />
                                </li>
                            )
                        } */}

                    </ul>
                </div>
                <div className="col-md-8">
                    <div aria-label="breadcrumb">
                        <ol className="breadcrumb ">
                            <li className="lead">Sustainable Score: 50</li>
                        </ol>
                    </div>
                    {aromas && envImpact && envImpactAvgMetaReicpe && tastes &&
                        <div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 ">

                                    < RadarChart data={aromas} title={"Aroma Intensity"} />
                                </div>
                                <div className="col-lg-4 offset-lg-1">
                                    < RadarChart data={tastes} title={"Taste Intensity"} />
                                </div>
                            </div>



                            < LineChart
                                dynamic_env_impact={envImpact}
                                env_impact_avg={envImpactAvgMetaReicpe}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};