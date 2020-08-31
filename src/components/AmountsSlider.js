import React , { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '5vh',
  },
  margin: {
    height: theme.spacing(3),
  },
   rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
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
    },

    {
      value: 0.25,
    },
    {
      value: 0.50,
    },
    {
      value: 0.75,
    },
    {
      label: ingredient.max,
      value: 1,
    },
  ];
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Slider
        value = {sliderValue}
        orientation="vertical"

        onChange = {handleChange}
        getAriaValueText={valuetext}
        aria-labelledby="vertical-slider"
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
