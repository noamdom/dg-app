import React, { useState, useEffect } from "react";
import { reduce, reduceRight, result, keyBy } from 'lodash'

export default function Tests() {
    const [title, setTitle] = useState("All steps");

    const my_reduce = () => {
        let d = Object.entries(data).reduce((result, [key, val]) => {
            if (key.startsWith('fruit') || key.startsWith('vegetable') || key.startsWith('fungus')) {
                'fruit && vegetable' in result ? result['fruit && vegetable'].push(val) : result['fruit && vegetable'] = [val];
            } else if (key.startsWith('beverage')) {
                'beverage' in result ? result['beverage'].push(val) : result['beverage'] = [val];
            } else if (key.startsWith('nutseed')) {
                'nutseed' in result ? result['nutseed'].push(val) : result['nutseed'] = [val];

            } else {
                key in result ? result[key].push(val) : result[key] = [val];
            }
            return result;

        }, {});
        return d;

        //    let d =  Object.entries(data).reduce((result, [key, val]) => {
        //     if(key.startsWith('fruit')) {
        //         (result['fruit'] || result['fruit'] = []).push(val);
        //     }
        //     return result;

        // } , {} );
        // return d;
    }

    return (
        <div>
            <div className="display-4 text-primary mt-3 mb-2">
                {title}
            </div>
            <div><pre>{JSON.stringify(my_reduce(), null, 2)}</pre></div>
            {console.log(my_reduce())}

        </div>




    )
}

const data = {
    "additive": [
        {
            "id": 212,
            "name": "salt",
            "entity_id": 778,
            "category": "additive",
            "min": 0,
            "max": 0.36,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 778,
                "entity_alias_readable": "Salt",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 778,
                "taste_name": "none",
                "sweet": 0,
                "salty": 10,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 778,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        },
        {
            "id": 226,
            "name": "granulated erythritol",
            "entity_id": 785,
            "category": "additive",
            "min": 0,
            "max": 145,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 785,
                "entity_alias_readable": "Sugar substitute",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 785,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 785,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        },
        {
            "id": 227,
            "name": "erythritol",
            "entity_id": 785,
            "category": "additive",
            "min": 0,
            "max": 40,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 785,
                "entity_alias_readable": "Sugar substitute",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 785,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 785,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        },
        {
            "id": 235,
            "name": "brown sugar",
            "entity_id": 781,
            "category": "additive",
            "min": 0,
            "max": 350,
            "value": 0.85,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 781,
                "entity_alias_readable": "Sugar",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 781,
                "taste_name": "none",
                "sweet": 10,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 781,
                "name": "Beet Sugar",
                "land_use": 1.8,
                "ghg_emissions": 1.8,
                "acidifying_emissions": 12.6,
                "eutrophying_emissions": 5.4,
                "freshwater_withdrawals": 218,
                "stress_weighted_water_use": 9493
            }
        },
        {
            "id": 237,
            "name": "sugar",
            "entity_id": 781,
            "category": "additive",
            "min": 300,
            "max": 500,
            "value": 0.9,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 781,
                "entity_alias_readable": "Sugar",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 781,
                "taste_name": "none",
                "sweet": 10,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 781,
                "name": "Beet Sugar",
                "land_use": 1.8,
                "ghg_emissions": 1.8,
                "acidifying_emissions": 12.6,
                "eutrophying_emissions": 5.4,
                "freshwater_withdrawals": 218,
                "stress_weighted_water_use": 9493
            }
        }
    ],
    "animalproduct": [
        {
            "id": 221,
            "name": "egg",
            "entity_id": 0,
            "category": "animalproduct",
            "min": 0,
            "max": 1,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.04,
            "aromas": {
                "entity_id": 0,
                "entity_alias_readable": "Egg",
                "Uncategorised": 0.16,
                "Decayed": 0.3,
                "Sweet": 0.1,
                "Woody": 0.12,
                "Medicinal": 0.31,
                "Sulfidic": 0.23,
                "Fruity": 0.05,
                "Smoky": 0.19,
                "Floral": 0.08,
                "Citrus": 0.07,
                "Mint": 0.04
            },
            "tastes": {
                "entity_id": 0,
                "taste_name": "Soft boiled eggs",
                "sweet": 1.3,
                "salty": 2.3,
                "sour": 0.45,
                "bitter": 0.15,
                "umami": 1.05,
                "fat": 2.35
            },
            "env_impact": {
                "entity_id": 0,
                "name": "Eggs",
                "land_use": 6.3,
                "ghg_emissions": 4.7,
                "acidifying_emissions": 53.7,
                "eutrophying_emissions": 21.8,
                "freshwater_withdrawals": 578,
                "stress_weighted_water_use": 17983
            }
        }
    ],
    "beverage": [
        {
            "id": 236,
            "name": "vegetal milk",
            "entity_id": 861,
            "category": "beverage",
            "min": 0,
            "max": 150,
            "value": 0.66,
            "unit": "ml",
            "unit_convertor_g": 0.00103,
            "aromas": {
                "entity_id": 861,
                "entity_alias_readable": "Soy milk",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.03,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 861,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 861,
                "name": "Soymilk",
                "land_use": 0.7,
                "ghg_emissions": 1,
                "acidifying_emissions": 2.6,
                "eutrophying_emissions": 1.1,
                "freshwater_withdrawals": 28,
                "stress_weighted_water_use": 956
            }
        }
    ],
    "beverage-alcoholic": [
        {
            "id": 238,
            "name": "sherry wine",
            "entity_id": 42,
            "category": "beverage-alcoholic",
            "min": 0,
            "max": 60,
            "value": 0.75,
            "unit": "ml",
            "unit_convertor_g": 0.0099,
            "aromas": {
                "entity_id": 42,
                "entity_alias_readable": "Sherry",
                "Uncategorised": 0.47,
                "Decayed": 0.73,
                "Sweet": 0.5,
                "Woody": 0.43,
                "Medicinal": 0.59,
                "Sulfidic": 0.31,
                "Fruity": 0.5,
                "Smoky": 0.47,
                "Floral": 0.4,
                "Citrus": 0.25,
                "Mint": 0.07
            },
            "tastes": {
                "entity_id": 42,
                "taste_name": "Wine (red)",
                "sweet": 0.65,
                "salty": 0.05,
                "sour": 2.7,
                "bitter": 0.91,
                "umami": 0.11,
                "fat": 0.2
            },
            "env_impact": {
                "entity_id": 42,
                "name": "Wine",
                "land_use": 1.8,
                "ghg_emissions": 1.8,
                "acidifying_emissions": 12.8,
                "eutrophying_emissions": 4.6,
                "freshwater_withdrawals": 79,
                "stress_weighted_water_use": 1149
            }
        }
    ],
    "cerealcrop-cereal": [
        {
            "id": 217,
            "name": "flour",
            "entity_id": 920,
            "category": "cerealcrop-cereal",
            "min": 0.36,
            "max": 250,
            "value": 1,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 920,
                "entity_alias_readable": "Flour",
                "Uncategorised": 0,
                "Decayed": 0.03,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 920,
                "taste_name": "0",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 920,
                "name": "Wheat & Rye",
                "land_use": 3.9,
                "ghg_emissions": 1.6,
                "acidifying_emissions": 13.4,
                "eutrophying_emissions": 7.2,
                "freshwater_withdrawals": 648,
                "stress_weighted_water_use": 33386
            }
        }
    ],
    "dairy": [
        {
            "id": 207,
            "name": "cream cheese",
            "entity_id": 62,
            "category": "dairy",
            "min": 0,
            "max": 130,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 62,
                "entity_alias_readable": "Cheese",
                "Uncategorised": 0.32,
                "Decayed": 0.67,
                "Sweet": 0.23,
                "Woody": 0.26,
                "Medicinal": 0.41,
                "Sulfidic": 0.46,
                "Fruity": 0.27,
                "Smoky": 0.45,
                "Floral": 0.24,
                "Citrus": 0.24,
                "Mint": 0.01
            },
            "tastes": {
                "entity_id": 62,
                "taste_name": "Soft cheese (Faisselle. plain)",
                "sweet": 0,
                "salty": 1.4,
                "sour": 2.23,
                "bitter": 0.63,
                "umami": 0.1,
                "fat": 1.43
            },
            "env_impact": {
                "entity_id": 62,
                "name": "Cheese",
                "land_use": 87.8,
                "ghg_emissions": 23.9,
                "acidifying_emissions": 165.5,
                "eutrophying_emissions": 98.4,
                "freshwater_withdrawals": 5605,
                "stress_weighted_water_use": 180851
            }
        },
        {
            "id": 213,
            "name": "butter",
            "entity_id": 60,
            "category": "dairy",
            "min": 0,
            "max": 100,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 60,
                "entity_alias_readable": "Butter",
                "Uncategorised": 0.42,
                "Decayed": 0.57,
                "Sweet": 0.33,
                "Woody": 0.3,
                "Medicinal": 0.47,
                "Sulfidic": 0.31,
                "Fruity": 0.25,
                "Smoky": 0.56,
                "Floral": 0.32,
                "Citrus": 0.37,
                "Mint": 0.07
            },
            "tastes": {
                "entity_id": 60,
                "taste_name": "Soft cheese (Faisselle. plain)",
                "sweet": 0,
                "salty": 1.4,
                "sour": 2.23,
                "bitter": 0.63,
                "umami": 0.1,
                "fat": 1.43
            },
            "env_impact": {
                "entity_id": 60,
                "name": "Cheese",
                "land_use": 21.6,
                "ghg_emissions": 28.5,
                "acidifying_emissions": 83.1,
                "eutrophying_emissions": 110.5,
                "freshwater_withdrawals": 26,
                "stress_weighted_water_use": 337
            }
        },
        {
            "id": 214,
            "name": "butter",
            "entity_id": 60,
            "category": "dairy",
            "min": 0,
            "max": 60,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 60,
                "entity_alias_readable": "Butter",
                "Uncategorised": 0.42,
                "Decayed": 0.57,
                "Sweet": 0.33,
                "Woody": 0.3,
                "Medicinal": 0.47,
                "Sulfidic": 0.31,
                "Fruity": 0.25,
                "Smoky": 0.56,
                "Floral": 0.32,
                "Citrus": 0.37,
                "Mint": 0.07
            },
            "tastes": {
                "entity_id": 60,
                "taste_name": "Soft cheese (Faisselle. plain)",
                "sweet": 0,
                "salty": 1.4,
                "sour": 2.23,
                "bitter": 0.63,
                "umami": 0.1,
                "fat": 1.43
            },
            "env_impact": {
                "entity_id": 60,
                "name": "Cheese",
                "land_use": 21.6,
                "ghg_emissions": 28.5,
                "acidifying_emissions": 83.1,
                "eutrophying_emissions": 110.5,
                "freshwater_withdrawals": 26,
                "stress_weighted_water_use": 337
            }
        },
        {
            "id": 223,
            "name": "whey protein isolate",
            "entity_id": 788,
            "category": "dairy",
            "min": 0,
            "max": 20,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 788,
                "entity_alias_readable": "Whey",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.24,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 788,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 788,
                "name": "Milk",
                "land_use": 9,
                "ghg_emissions": 3.2,
                "acidifying_emissions": 20,
                "eutrophying_emissions": 10.7,
                "freshwater_withdrawals": 628,
                "stress_weighted_water_use": 19786
            }
        },
        {
            "id": 228,
            "name": "whipping cream",
            "entity_id": 68,
            "category": "dairy",
            "min": 0,
            "max": 80,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 68,
                "entity_alias_readable": "Cream Cheese",
                "Uncategorised": 0.32,
                "Decayed": 0.63,
                "Sweet": 0.23,
                "Woody": 0.26,
                "Medicinal": 0.41,
                "Sulfidic": 0.46,
                "Fruity": 0.27,
                "Smoky": 0.45,
                "Floral": 0.24,
                "Citrus": 0.24,
                "Mint": 0.01
            },
            "tastes": {
                "entity_id": 68,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 68,
                "name": "Milk",
                "land_use": 9,
                "ghg_emissions": 3.2,
                "acidifying_emissions": 20,
                "eutrophying_emissions": 10.7,
                "freshwater_withdrawals": 628,
                "stress_weighted_water_use": 19786
            }
        }
    ],
    "dish": [
        {
            "id": 209,
            "name": "water",
            "entity_id": -1,
            "category": "dish",
            "min": 0,
            "max": 85,
            "value": 1,
            "unit": "ml",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": -1,
                "entity_alias_readable": "none",
                "Uncategorised": 0,
                "Decayed": 0,
                "Sweet": 0,
                "Woody": 0,
                "Medicinal": 0,
                "Sulfidic": 0,
                "Fruity": 0,
                "Smoky": 0,
                "Floral": 0,
                "Citrus": 0,
                "Mint": 0
            },
            "tastes": {
                "entity_id": -1,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": -1,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        },
        {
            "id": 219,
            "name": "baking powder",
            "entity_id": -1,
            "category": "dish",
            "min": 2,
            "max": 4,
            "value": 1,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": -1,
                "entity_alias_readable": "none",
                "Uncategorised": 0,
                "Decayed": 0,
                "Sweet": 0,
                "Woody": 0,
                "Medicinal": 0,
                "Sulfidic": 0,
                "Fruity": 0,
                "Smoky": 0,
                "Floral": 0,
                "Citrus": 0,
                "Mint": 0
            },
            "tastes": {
                "entity_id": -1,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": -1,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        },
        {
            "id": 220,
            "name": "baking soda",
            "entity_id": -1,
            "category": "dish",
            "min": 1.1,
            "max": 4,
            "value": 1,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": -1,
                "entity_alias_readable": "none",
                "Uncategorised": 0,
                "Decayed": 0,
                "Sweet": 0,
                "Woody": 0,
                "Medicinal": 0,
                "Sulfidic": 0,
                "Fruity": 0,
                "Smoky": 0,
                "Floral": 0,
                "Citrus": 0,
                "Mint": 0
            },
            "tastes": {
                "entity_id": -1,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": -1,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        }
    ],
    "essentialoil": [
        {
            "id": 233,
            "name": "eucalyptus powder",
            "entity_id": 105,
            "category": "essentialoil",
            "min": 0,
            "max": 8,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 105,
                "entity_alias_readable": "Eucalyptus",
                "Uncategorised": 0.1,
                "Decayed": 0.17,
                "Sweet": 0.09,
                "Woody": 0.18,
                "Medicinal": 0.16,
                "Sulfidic": 0.09,
                "Fruity": 0.09,
                "Smoky": 0.06,
                "Floral": 0.11,
                "Citrus": 0.12,
                "Mint": 0.25
            },
            "tastes": {
                "entity_id": 105,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 105,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        }
    ],
    "fruit": [
        {
            "id": 234,
            "name": "date",
            "entity_id": 177,
            "category": "fruit",
            "min": 0,
            "max": 240,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 177,
                "entity_alias_readable": "Dates",
                "Uncategorised": 0.23,
                "Decayed": 0.3,
                "Sweet": 0.26,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.12,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 177,
                "taste_name": "Date (dried fruit)",
                "sweet": 4.23,
                "salty": 0,
                "sour": 0.7,
                "bitter": 0.4,
                "umami": 1.23,
                "fat": 1.87
            },
            "env_impact": {
                "entity_id": 177,
                "name": "other fruit",
                "land_use": 0.9,
                "ghg_emissions": 1.1,
                "acidifying_emissions": 5.8,
                "eutrophying_emissions": 2.4,
                "freshwater_withdrawals": 154,
                "stress_weighted_water_use": 9533
            }
        }
    ],
    "fruit-berry": [
        {
            "id": 241,
            "name": "berry jouice",
            "entity_id": 220,
            "category": "fruit-berry",
            "min": 0,
            "max": 60,
            "value": 0,
            "unit": "ml",
            "unit_convertor_g": 0.000523,
            "aromas": {
                "entity_id": 220,
                "entity_alias_readable": "Berry",
                "Uncategorised": 0.12,
                "Decayed": 0.1,
                "Sweet": 0.12,
                "Woody": 0.14,
                "Medicinal": 0.14,
                "Sulfidic": 0.07,
                "Fruity": 0.05,
                "Smoky": 0.13,
                "Floral": 0.15,
                "Citrus": 0.16,
                "Mint": 0.02
            },
            "tastes": {
                "entity_id": 220,
                "taste_name": "Raspberry",
                "sweet": 2.2,
                "salty": 0.08,
                "sour": 2.49,
                "bitter": 0.36,
                "umami": 0.04,
                "fat": 0.09
            },
            "env_impact": {
                "entity_id": 220,
                "name": "Berries & Grapes",
                "land_use": 2.4,
                "ghg_emissions": 1.5,
                "acidifying_emissions": 12.3,
                "eutrophying_emissions": 6.1,
                "freshwater_withdrawals": 420,
                "stress_weighted_water_use": 21162
            }
        }
    ],
    "fruit-citrus": [
        {
            "id": 240,
            "name": "lomen juice",
            "entity_id": 240,
            "category": "fruit-citrus",
            "min": 0,
            "max": 60,
            "value": 0,
            "unit": "ml",
            "unit_convertor_g": 0.000785,
            "aromas": {
                "entity_id": 240,
                "entity_alias_readable": "Lemon",
                "Uncategorised": 0.46,
                "Decayed": 0.53,
                "Sweet": 0.38,
                "Woody": 0.5,
                "Medicinal": 0.49,
                "Sulfidic": 0.24,
                "Fruity": 0.22,
                "Smoky": 0.36,
                "Floral": 0.61,
                "Citrus": 0.94,
                "Mint": 0.46
            },
            "tastes": {
                "entity_id": 240,
                "taste_name": "Lemon (fresh fruit)",
                "sweet": 0.4,
                "salty": 0.3,
                "sour": 8.9,
                "bitter": 4.1,
                "umami": 0.3,
                "fat": 0.5
            },
            "env_impact": {
                "entity_id": 240,
                "name": "Other Frutis",
                "land_use": 0.9,
                "ghg_emissions": 1.1,
                "acidifying_emissions": 5.8,
                "eutrophying_emissions": 2.4,
                "freshwater_withdrawals": 154,
                "stress_weighted_water_use": 9533
            }
        }
    ],
    "fruit-essence": [
        {
            "id": 231,
            "name": "vanilla extract",
            "entity_id": 245,
            "category": "fruit-essence",
            "min": 2,
            "max": 6,
            "value": 0.75,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 245,
                "entity_alias_readable": "Vanilla",
                "Uncategorised": 0.45,
                "Decayed": 0.47,
                "Sweet": 0.57,
                "Woody": 0.33,
                "Medicinal": 0.45,
                "Sulfidic": 0.3,
                "Fruity": 0.37,
                "Smoky": 0.31,
                "Floral": 0.43,
                "Citrus": 0.22,
                "Mint": 0.37
            },
            "tastes": {
                "entity_id": 245,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 245,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        }
    ],
    "nutseed-legume": [
        {
            "id": 215,
            "name": "Vegan Butter",
            "entity_id": 290,
            "category": "nutseed-legume",
            "min": 0,
            "max": 60,
            "value": 0.66,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 290,
                "entity_alias_readable": "Soybean Oil",
                "Uncategorised": 0.01,
                "Decayed": 0.6,
                "Sweet": 0.01,
                "Woody": 0.01,
                "Medicinal": 0.78,
                "Sulfidic": 0.01,
                "Fruity": 0.01,
                "Smoky": 0.01,
                "Floral": 0.43,
                "Citrus": 0.01,
                "Mint": 0.27
            },
            "tastes": {
                "entity_id": 290,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 290,
                "name": "Soybean Oil",
                "land_use": 10.5,
                "ghg_emissions": 6.3,
                "acidifying_emissions": 15.7,
                "eutrophying_emissions": 11.7,
                "freshwater_withdrawals": 415,
                "stress_weighted_water_use": 14888
            }
        }
    ],
    "nutseed-nut": [
        {
            "id": 211,
            "name": "almond",
            "entity_id": 281,
            "category": "nutseed-nut",
            "min": 0,
            "max": 110,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 281,
                "entity_alias_readable": "Almond",
                "Uncategorised": 0.31,
                "Decayed": 0.3,
                "Sweet": 0.34,
                "Woody": 0.19,
                "Medicinal": 0.25,
                "Sulfidic": 0.2,
                "Fruity": 0.14,
                "Smoky": 0.3,
                "Floral": 0.3,
                "Citrus": 0.16,
                "Mint": 0.2
            },
            "tastes": {
                "entity_id": 281,
                "taste_name": "Almond (dried fruit)",
                "sweet": 0.5,
                "salty": 0.7,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0.7
            },
            "env_impact": {
                "entity_id": 281,
                "name": "Nuts",
                "land_use": 13,
                "ghg_emissions": 0.4,
                "acidifying_emissions": 45.2,
                "eutrophying_emissions": 19.2,
                "freshwater_withdrawals": 4134,
                "stress_weighted_water_use": 229890
            }
        },
        {
            "id": 224,
            "name": "walnuts",
            "entity_id": 297,
            "category": "nutseed-nut",
            "min": 0,
            "max": 75,
            "value": 0.75,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 297,
                "entity_alias_readable": "Walnut",
                "Uncategorised": 0.29,
                "Decayed": 0.33,
                "Sweet": 0.3,
                "Woody": 0.23,
                "Medicinal": 0.35,
                "Sulfidic": 0.21,
                "Fruity": 0.14,
                "Smoky": 0.26,
                "Floral": 0.29,
                "Citrus": 0.18,
                "Mint": 0.24
            },
            "tastes": {
                "entity_id": 297,
                "taste_name": "Walnut (dried fruit)",
                "sweet": 4.2,
                "salty": 0,
                "sour": 2.3,
                "bitter": 0,
                "umami": 0,
                "fat": 3.05
            },
            "env_impact": {
                "entity_id": 297,
                "name": "Nuts",
                "land_use": 13,
                "ghg_emissions": 0.4,
                "acidifying_emissions": 45.2,
                "eutrophying_emissions": 19.2,
                "freshwater_withdrawals": 4134,
                "stress_weighted_water_use": 229890
            }
        },
        {
            "id": 225,
            "name": "walnuts",
            "entity_id": 297,
            "category": "nutseed-nut",
            "min": 50,
            "max": 150,
            "value": 0.5,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 297,
                "entity_alias_readable": "Walnut",
                "Uncategorised": 0.29,
                "Decayed": 0.33,
                "Sweet": 0.3,
                "Woody": 0.23,
                "Medicinal": 0.35,
                "Sulfidic": 0.21,
                "Fruity": 0.14,
                "Smoky": 0.26,
                "Floral": 0.29,
                "Citrus": 0.18,
                "Mint": 0.24
            },
            "tastes": {
                "entity_id": 297,
                "taste_name": "Walnut (dried fruit)",
                "sweet": 4.2,
                "salty": 0,
                "sour": 2.3,
                "bitter": 0,
                "umami": 0,
                "fat": 3.05
            },
            "env_impact": {
                "entity_id": 297,
                "name": "Nuts",
                "land_use": 13,
                "ghg_emissions": 0.4,
                "acidifying_emissions": 45.2,
                "eutrophying_emissions": 19.2,
                "freshwater_withdrawals": 4134,
                "stress_weighted_water_use": 229890
            }
        }
    ],
    "nutseed-seed": [
        {
            "id": 218,
            "name": "flax seed",
            "entity_id": 388,
            "category": "nutseed-seed",
            "min": 0,
            "max": 30,
            "value": 1,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 388,
                "entity_alias_readable": "Flaxseed",
                "Uncategorised": 0.29,
                "Decayed": 0.43,
                "Sweet": 0.33,
                "Woody": 0.19,
                "Medicinal": 0.22,
                "Sulfidic": 0.26,
                "Fruity": 0.18,
                "Smoky": 0.24,
                "Floral": 0.32,
                "Citrus": 0.19,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 388,
                "taste_name": "0",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 388,
                "name": "Wheat & Rye",
                "land_use": 3.9,
                "ghg_emissions": 1.6,
                "acidifying_emissions": 13.4,
                "eutrophying_emissions": 7.2,
                "freshwater_withdrawals": 648,
                "stress_weighted_water_use": 33386
            }
        }
    ],
    "plant": [
        {
            "id": 208,
            "name": "olive oil",
            "entity_id": 307,
            "category": "plant",
            "min": 120,
            "max": 120,
            "value": 0,
            "unit": "ml",
            "unit_convertor_g": 0.0009,
            "aromas": {
                "entity_id": 307,
                "entity_alias_readable": "Olive",
                "Uncategorised": 0.36,
                "Decayed": 0.33,
                "Sweet": 0.41,
                "Woody": 0.28,
                "Medicinal": 0.45,
                "Sulfidic": 0.3,
                "Fruity": 0.38,
                "Smoky": 0.3,
                "Floral": 0.41,
                "Citrus": 0.24,
                "Mint": 0.23
            },
            "tastes": {
                "entity_id": 307,
                "taste_name": "Olives (black)",
                "sweet": 0.55,
                "salty": 3.49,
                "sour": 2.22,
                "bitter": 1.6,
                "umami": 0.68,
                "fat": 1.77
            },
            "env_impact": {
                "entity_id": 307,
                "name": "Olive Oil",
                "land_use": 26.3,
                "ghg_emissions": 5.4,
                "acidifying_emissions": 37.6,
                "eutrophying_emissions": 37.3,
                "freshwater_withdrawals": 2142,
                "stress_weighted_water_use": 177480
            }
        }
    ],
    "plantderivative": [
        {
            "id": 229,
            "name": "apple cider vinegar",
            "entity_id": 383,
            "category": "plantderivative",
            "min": 5,
            "max": 20,
            "value": 0.7,
            "unit": "g",
            "unit_convertor_g": 0.0017,
            "aromas": {
                "entity_id": 383,
                "entity_alias_readable": "Apple Cider Vinegar",
                "Uncategorised": 0.02,
                "Decayed": 0.03,
                "Sweet": 0.03,
                "Woody": 0,
                "Medicinal": 0.04,
                "Sulfidic": 0.01,
                "Fruity": 0.02,
                "Smoky": 0.01,
                "Floral": 0.01,
                "Citrus": 0.12,
                "Mint": 0
            },
            "tastes": {
                "entity_id": 383,
                "taste_name": "Cider",
                "sweet": 0.1,
                "salty": 0.1,
                "sour": 2.88,
                "bitter": 0.8,
                "umami": 0.06,
                "fat": 0.04
            },
            "env_impact": {
                "entity_id": 383,
                "name": "Apples",
                "land_use": 0.6,
                "ghg_emissions": 0.4,
                "acidifying_emissions": 3.5,
                "eutrophying_emissions": 1.5,
                "freshwater_withdrawals": 180,
                "stress_weighted_water_use": 12949
            }
        },
        {
            "id": 230,
            "name": "apple cider vinegar",
            "entity_id": 383,
            "category": "plantderivative",
            "min": 0,
            "max": 8,
            "value": 1,
            "unit": "g",
            "unit_convertor_g": 0.0017,
            "aromas": {
                "entity_id": 383,
                "entity_alias_readable": "Apple Cider Vinegar",
                "Uncategorised": 0.02,
                "Decayed": 0.03,
                "Sweet": 0.03,
                "Woody": 0,
                "Medicinal": 0.04,
                "Sulfidic": 0.01,
                "Fruity": 0.02,
                "Smoky": 0.01,
                "Floral": 0.01,
                "Citrus": 0.12,
                "Mint": 0
            },
            "tastes": {
                "entity_id": 383,
                "taste_name": "Cider",
                "sweet": 0.1,
                "salty": 0.1,
                "sour": 2.88,
                "bitter": 0.8,
                "umami": 0.06,
                "fat": 0.04
            },
            "env_impact": {
                "entity_id": 383,
                "name": "Apples",
                "land_use": 0.6,
                "ghg_emissions": 0.4,
                "acidifying_emissions": 3.5,
                "eutrophying_emissions": 1.5,
                "freshwater_withdrawals": 180,
                "stress_weighted_water_use": 12949
            }
        },
        {
            "id": 239,
            "name": "chocolate ",
            "entity_id": 817,
            "category": "plantderivative",
            "min": 0,
            "max": 60,
            "value": 0.75,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 817,
                "entity_alias_readable": "Chocolate",
                "Uncategorised": 0.01,
                "Decayed": 0.07,
                "Sweet": 0.03,
                "Woody": 0.13,
                "Medicinal": 0.18,
                "Sulfidic": 0.17,
                "Fruity": 0.11,
                "Smoky": 0.18,
                "Floral": 0.25,
                "Citrus": 0.12,
                "Mint": 0.17
            },
            "tastes": {
                "entity_id": 817,
                "taste_name": "Dark chocolate",
                "sweet": 2.78,
                "salty": 0.09,
                "sour": 1.08,
                "bitter": 3.47,
                "umami": 0.12,
                "fat": 3.16
            },
            "env_impact": {
                "entity_id": 817,
                "name": "Dark Chocolate",
                "land_use": 69,
                "ghg_emissions": 46.7,
                "acidifying_emissions": 46.3,
                "eutrophying_emissions": 87.1,
                "freshwater_withdrawals": 541,
                "stress_weighted_water_use": 2879
            }
        }
    ],
    "spice": [
        {
            "id": 210,
            "name": "nutmeg",
            "entity_id": 336,
            "category": "spice",
            "min": 0,
            "max": 8,
            "value": 0.5,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 336,
                "entity_alias_readable": "Nutmeg",
                "Uncategorised": 0.39,
                "Decayed": 0.37,
                "Sweet": 0.42,
                "Woody": 0.45,
                "Medicinal": 0.43,
                "Sulfidic": 0.26,
                "Fruity": 0.17,
                "Smoky": 0.25,
                "Floral": 0.42,
                "Citrus": 0.54,
                "Mint": 0.57
            },
            "tastes": {
                "entity_id": 336,
                "taste_name": "Walnut (dried fruit)",
                "sweet": 1.07,
                "salty": 0.2,
                "sour": 0.55,
                "bitter": 1.6,
                "umami": 0.62,
                "fat": 2.6
            },
            "env_impact": {
                "entity_id": 336,
                "name": "Nuts",
                "land_use": 13,
                "ghg_emissions": 0.4,
                "acidifying_emissions": 45.2,
                "eutrophying_emissions": 19.2,
                "freshwater_withdrawals": 4134,
                "stress_weighted_water_use": 229890
            }
        },
        {
            "id": 222,
            "name": "ground cinnamon",
            "entity_id": 330,
            "category": "spice",
            "min": 0,
            "max": 12,
            "value": 0.66,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 330,
                "entity_alias_readable": "Cinnamon",
                "Uncategorised": 0.43,
                "Decayed": 0.3,
                "Sweet": 0.5,
                "Woody": 0.5,
                "Medicinal": 0.47,
                "Sulfidic": 0.21,
                "Fruity": 0.18,
                "Smoky": 0.27,
                "Floral": 0.52,
                "Citrus": 0.47,
                "Mint": 0.59
            },
            "tastes": {
                "entity_id": 330,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 330,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        },
        {
            "id": 232,
            "name": "celery powder",
            "entity_id": 329,
            "category": "spice",
            "min": 0,
            "max": 12,
            "value": 0,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 329,
                "entity_alias_readable": "Celery",
                "Uncategorised": 0.48,
                "Decayed": 0.6,
                "Sweet": 0.51,
                "Woody": 0.54,
                "Medicinal": 0.57,
                "Sulfidic": 0.36,
                "Fruity": 0.25,
                "Smoky": 0.38,
                "Floral": 0.51,
                "Citrus": 0.66,
                "Mint": 0.64
            },
            "tastes": {
                "entity_id": 329,
                "taste_name": "none",
                "sweet": 0,
                "salty": 0,
                "sour": 0,
                "bitter": 0,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 329,
                "name": "none",
                "land_use": 0,
                "ghg_emissions": 0,
                "acidifying_emissions": 0,
                "eutrophying_emissions": 0,
                "freshwater_withdrawals": 0,
                "stress_weighted_water_use": 0
            }
        }
    ],
    "vegetable-root": [
        {
            "id": 216,
            "name": "carrot",
            "entity_id": 368,
            "category": "vegetable-root",
            "min": 40,
            "max": 300,
            "value": 0.85,
            "unit": "g",
            "unit_convertor_g": 0.001,
            "aromas": {
                "entity_id": 368,
                "entity_alias_readable": "Carrot",
                "Uncategorised": 0.44,
                "Decayed": 0.33,
                "Sweet": 0.43,
                "Woody": 0.49,
                "Medicinal": 0.49,
                "Sulfidic": 0.31,
                "Fruity": 0.2,
                "Smoky": 0.36,
                "Floral": 0.51,
                "Citrus": 0.59,
                "Mint": 0.37
            },
            "tastes": {
                "entity_id": 368,
                "taste_name": "Carrot (raw. plain)",
                "sweet": 2.4,
                "salty": 0.7,
                "sour": 0.35,
                "bitter": 1.25,
                "umami": 0,
                "fat": 0
            },
            "env_impact": {
                "entity_id": 368,
                "name": "Onions & Leeks",
                "land_use": 0.4,
                "ghg_emissions": 0.5,
                "acidifying_emissions": 3.6,
                "eutrophying_emissions": 3.2,
                "freshwater_withdrawals": 14,
                "stress_weighted_water_use": 932
            }
        }
    ]
}
