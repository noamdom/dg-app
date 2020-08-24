import React , { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 100,
  },
  margin: {
    height: theme.spacing(3),
  },
}));



function valuetext(value) {
  return `${value} `;
}


export default function MySLider(props) {
  const [ingredient, setIngredient] = useState(props.ingredient);
  // const [sliderValue, setSLiderValue] = useState(props.ingredient.kosher_value * (ingredient.max - ingredient.min) + ingredient.min );
  const [sliderValue, setSLiderValue] = useState(props.ingredient.value );


  const handleChange = (e, newVal) => {
    // let v = newVal / (ingredient.max - ingredient.min)
    setSLiderValue(newVal);
    props.onChange(newVal)
  }

 


  const marks = [
    {
      // value: ingredient.min,
      label: ingredient.min,
      value: 0,
      // label: 0
    },
    {
      // value: ingredient.max,
      label: ingredient.max,
      value: 1,
      // label: 1
    },
  ];
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Slider
        value = {sliderValue}
        onChange = {handleChange}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={0.01}
        // min = {ingredient.min}
        // max = {ingredient.max}
        min = {0}
        max = {1}
        // valueLabelDisplay="auto"
        marks={marks}

      />

    </div>
  );
}
