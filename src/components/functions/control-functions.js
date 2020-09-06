// icons
import best_sustainable from '../../images/best-sustainable.png';
import worst_sustainable from '../../images/worst-sustainable.png';
import mid_sustainable from '../../images/mid-sustainable.png';

import spice_icon from '../../images/spice.png'
import nutseed_icon from '../../images/nutseed.png'
import fruit_icon from '../../images/fruit.png'
import animalproduct_icon from '../../images/animalproduct.png'
import dish_icon from '../../images/dish.png';
import beverage_icon from '../../images/beverage.png';



import best_aroma from '../../images/best-aroma.png';
import worst_aroma from '../../images/worst-aroma.png';
import mid_aroma from '../../images/mid-aroma.png';
import best_taste from '../../images/best-taste.png';
import worst_taste from '../../images/worst-taste.png';
import mid_taste from '../../images/mid-taste.png';


// constants
const DIGIT_AFTER_POINT = 100


export function customDietName(param) {
    if (param === "Kosher") {
        return "KOSHER";
    } else if (param === "Katogenic") {
        return "KETOGENIC";
    } else {
        return "VEGAN"
    }
}



export const matchImg = (dish_name) => {
    if (dish_name.startsWith('fruit')) {
        return fruit_icon;
    } else if (dish_name.startsWith('beverage')) {
        return beverage_icon;
    } else if (dish_name.startsWith('nutseed')) {
        return nutseed_icon;
    } else if (dish_name.startsWith('animalproduct')) {
        return animalproduct_icon;
    } else if (dish_name.startsWith('spice')) {
        return spice_icon;
    } else {
        return dish_icon;
    }
}


export  const sustaibleIndication = (sustainableScore) => {
    if (sustainableScore < -3) {
        return best_sustainable
    } else if (sustainableScore < 3) {
        return mid_sustainable
    } else {
        return worst_sustainable
    }
} 




export const aromaIndication = (aromaScore) => {
    if (aromaScore <= 1) {
        return best_aroma
    } else if (aromaScore < 6) {
        return mid_aroma
    } else {
        return worst_aroma
    }
}

export const tasteIndication = (tasteScore) => {
    if (tasteScore <= 1) {
        return best_taste
    } else if (tasteScore < 5) {
        return mid_taste
    } else {
        return worst_taste
    }
}



export const cateogryReduce = (ingredient_data) => {
    let result = {};
    Object.values(ingredient_data).map(ing => {
        let key = ing['category'];
        if (key.startsWith('fruit') || key.startsWith('vegetable') || key.startsWith('fungus') || key.startsWith('plant') || key.startsWith('herb') || key.startsWith('seed')) {
            return 'fruit / vegetable / plant' in result ? result['fruit / vegetable / plant'].push(ing) : result['fruit / vegetable / plant'] = [ing];
        } else if (key.startsWith('beverage')) {
            return 'beverage' in result ? result['beverage'].push(ing) : result['beverage'] = [ing];
        } else if (key.startsWith('nutseed')) {
            return 'nutseed' in result ? result['nutseed'].push(ing) : result['nutseed'] = [ing];
        } else if (key.startsWith('spice') || key.startsWith('essentialoil') || key.startsWith('additive')) {
            return 'spice / additive' in result ? result['spice / additive'].push(ing) : result['spice / additive'] = [ing];
        }
        else if (key.startsWith('fish') ||
            key.startsWith('meat') ||
            key.startsWith('dairy') ||
            key.startsWith('animalproduct')) {
                return 'animalproduct' in result ? 
                    result['animalproduct'].push(ing)
                    : result['animalproduct'] = [ing];
        }
        // else if (key.startsWith('dairy') || key.startsWith('animalproduct')) {
        //     'dairy / animalproduct' in result ? result['dairy / animalproduct'].push(ing) : result['dairy / animalproduct'] = [ing];
        // }
        else {
            return 'dish' in result ? result['dish'].push(ing) : result['dish'] = [ing];
            // key in result ? result[key].push(ing) : result[key] = [ing];
        }
    });

    return result;
}




export function noramlizeValue(val, min, max) {
    return (val * (max - min) + min).toFixed(1)
}


export function computeAromaScore(aromaIntensity, ingFactor) {
    return aromaIntensity * ingFactor;
}


export function computeTasteScore(tasteIntensity, ingFactor) {
    return tasteIntensity * ingFactor;
}

export function computeEnvImpactScore(envScore, ingFactor, convertor) {
    return envScore * ingFactor * convertor
}

export function roundNumber(num) {
    return Math.round(num * DIGIT_AFTER_POINT) / DIGIT_AFTER_POINT;
}

export function roundDict(dict) {
    for (const [key, val] of Object.entries(dict)) {
        dict[key] = roundNumber(val);
    }
}
