import React, { useState, useEffect } from "react";
import RadarChart from '../components/RadaerByData.js'
import LineChart from '../components/BasicChart.js'
import AmountSlider from '../components/AmountsSlider.js'
import ServiceApi from "../services/ServiceApi.js";
import { Button, Collapse, Card } from 'react-bootstrap';
import { groupBy } from 'lodash';
import { variance } from 'mathjs'


const DIGIT_AFTER_POINT = 100
const WATER_FACTOR = 0.1


function customDietName(param) {
    if (param === "Kosher") {
        return "KOSHER";
    } else if (param === "Katogenic") {
        return "KETOGENIC";
    } else {
        return "VEGAN"
    }
}

const cateogry_reduce = (ingredient_data) => {
    let result = {};
    Object.values(ingredient_data).map(ing => {
        let key = ing['category'];
        if (key.startsWith('fruit') || key.startsWith('vegetable') || key.startsWith('fungus') || key.startsWith('plant') || key.startsWith('herb') || key.startsWith('seed')) {
            'fruit / vegetable / plant' in result ? result['fruit / vegetable / plant'].push(ing) : result['fruit / vegetable / plant'] = [ing];
        } else if (key.startsWith('beverage')) {
            'beverage' in result ? result['beverage'].push(ing) : result['beverage'] = [ing];
        } else if (key.startsWith('nutseed')) {
            'nutseed' in result ? result['nutseed'].push(ing) : result['nutseed'] = [ing];
        } else if (key.startsWith('spice') || key.startsWith('essentialoil') || key.startsWith('additive')) {
            'spice / additive' in result ? result['spice / additive'].push(ing) : result['spice / additive'] = [ing];
        } 
        else if (key.startsWith('fish') ||
                 key.startsWith('meat') || 
                 key.startsWith('dairy') || 
                 key.startsWith('animalproduct') ) {
            'animalproduct' in result ? result['animalproduct'].push(ing) 
                                    : result['animalproduct'] = [ing];
        }
        // else if (key.startsWith('dairy') || key.startsWith('animalproduct')) {
        //     'dairy / animalproduct' in result ? result['dairy / animalproduct'].push(ing) : result['dairy / animalproduct'] = [ing];
        // }
        else {
            'dish' in result ? result['dish'].push(ing) : result['dish'] = [ing];
            // key in result ? result[key].push(ing) : result[key] = [ing];
        }
    });

    console.log(result);

    return result;
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
    return env_score * ing_factor * convertor
}

function round_number(num) {
    return Math.round(num * DIGIT_AFTER_POINT) / DIGIT_AFTER_POINT;
}

function round_dict(dict) {
    for (const [key, val] of Object.entries(dict)) {
        dict[key] = round_number(val);
    }
}




export default function Control(props) {
    const [title, setTitle] = useState("Process");
    const [pickedRecipe, setPickedRecipe] = useState(props.recipe);
    const [pickedDiet, setPickedDiet] = useState(customDietName(props.diet));
    const [ingredients, setIngredients] = useState([]);
    const [dynamicIngredients, setDynamicIngredients] = useState([]);
    const [aromas, setAromas] = useState();
    const [tastes, setTastes] = useState();
    const [openDic, setOpenDic] = useState({});
    const [sustainableScore, setSustainableScore] = useState(0)
    const [aromaScore, setAromaScore] = useState(0)
    const [tasteScore, setTasteScore] = useState(0)
    const [showZeros, setShowZeros] = useState(false);


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
                    setIngredients(cateogry_reduce(recipe.ingredients));
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
        get_category_titles();

    }, []);

    


    const calculate_aromas_avarge = () => {

        if (dynamicIngredients.length > 0) {

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

            round_dict(aromas_avg);
            setAromaScore(round_number(variance(Object.values(aromas_avg), 'uncorrected')));
            setAromas(aromas_avg);
        }
    };



    const calculate_taste_avarge = () => {
        if (dynamicIngredients.length > 0) {

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

            round_dict(taste_avg);
            setTasteScore(round_number(variance(Object.values(taste_avg), 'uncorrected')));
            setTastes(taste_avg);
        }
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

                    env_impact['land_use'] += env_impact_score(env_impact_data.land_use, factor, ing.unit_convertor_g);
                    env_impact['ghg'] += env_impact_score(env_impact_data.ghg_emissions, factor, ing.unit_convertor_g);
                    env_impact['acid'] += env_impact_score(env_impact_data.acidifying_emissions, factor, ing.unit_convertor_g);
                    env_impact['eutrophy'] += env_impact_score(env_impact_data.eutrophying_emissions, factor, ing.unit_convertor_g);
                    env_impact['freshwater'] += (env_impact_score(env_impact_data.freshwater_withdrawals, factor, ing.unit_convertor_g) * WATER_FACTOR);
                }
            });

            // round values:
            round_dict(env_impact)



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

    const calculate_score = () => {
        if (envImpactAvgMetaReicpe && envImpact) {
            let sum = 0;
            for (const key of Object.keys(envImpact)) {
                sum += ((envImpact[key] - envImpactAvgMetaReicpe[key]) * 0.2);
            }

            setSustainableScore(Math.round(sum * DIGIT_AFTER_POINT) / DIGIT_AFTER_POINT);
        }
    }



    useEffect(() => {
        calculate_aromas_avarge();
        calculate_taste_avarge();
        calculate_env_impact_avarge();


        SetIsLoading(false);

    }, [dynamicIngredients, metaRecipe, envImpactAvgMetaReicpe])


    useEffect(() => {
        calculate_score()

    }, [envImpactAvgMetaReicpe, envImpact])


    useEffect(() => {
        get_category_titles()

    }, [ingredients]);


    const handleIngValChange = (val, id) => (
        setDynamicIngredients(
            dynamicIngredients.map(ing =>
                ing.id === id
                    ? { ...ing, value: val }
                    : ing)
        )
    )

    const sustaible_indication = () => {
        if (sustainableScore < -3) {
            return "bg-success"
        } else if (sustainableScore < 3) {
            return "bg-warning"
        } else {
            return "bg-danger"
        }
    }


    const falvor_indication = (flavor_score) => {
        if (flavor_score <= 1) {
            return "bg-success"
        } else if (flavor_score < 5) {
            return "bg-warning"
        } else {
            return "bg-danger"
        }
    }






    // const dd = metaRecipe.recipes[0];
    return (
        <div className="container text-left ">

            {/* <div><pre>{ metaRecipe && JSON.parse(metaRecipe, null, 2)}</pre></div> */}

            <div className="row">

                {/* { dynamicIngredients && console.log(groupBy(dynamicIngredients , "category" )) } */}
                <div className="col-md-4">
                   <div  className="overflow-auto" style={{height : '69vh'}}>
                    
                    {
                        ingredients && Object.entries(ingredients).map(([cat, val]) => {

                            return (

                                
                                <Card key={cat} >
                                    <Card.Header className="list-group-item d-flex justify-content-between align-items-center text-capitalize bg-light "
                                        onClick={() => setOpenDic(openDic => ({
                                            ...openDic,
                                            [cat]: !openDic[cat]
                                        }))}
                                        aria-controls={cat}
                                        aria-expanded={openDic[cat]}
                                    // key={cat}
                                    >
                                        {cat}
                                    </Card.Header >
                                    <Collapse in={openDic[cat]}>

                                        <ul id={cat} className="list-group list-group-flush">
                                            {
                                                val.map((ing, i) =>
                                                    <li className={"  list-group-item  justify-content-between align-items-center text-capitalize "
                                                            + (props.zeros || ing.value > 0 ? "d-flex" : " d-none")}  
                                                        key={(ing.id) + "_" + (i)}>
                                                        {noramlize_value(ing.value, ing.min, ing.max)}{ing.unit} {ing.name}
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
                    </div>
                    


                </div>
                <div className="col-md-8">
                    <div aria-label="breadcrumb">

                        <ol className="breadcrumb ">
                            <li>
                                <span className={" lead px-2 mr-2  " + (sustaible_indication())}>Sustaible: {sustainableScore}</span>
                            </li>
                            <li>
                                <span className={"lead px-2 mr-2  " + (falvor_indication(aromaScore))}>Aroma: {aromaScore}</span>
                            </li>
                            <li>
                                <span className={"lead px-2 mr-2  " + (falvor_indication(tasteScore))}>Taste: {tasteScore}</span>
                            </li>
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
                            <div className="col-md-10 offset-1  justify-content-center align-items-center ">
                                < LineChart
                                    dynamic_env_impact={envImpact}
                                    env_impact_avg={envImpactAvgMetaReicpe}
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};