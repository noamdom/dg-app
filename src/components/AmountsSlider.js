import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const StyledSlider = withStyles({
  root: {
    border: 0,
    color: '#2f1544;',


  },
  mark: {
    backgroundColor: '#2f1544',
    height: 1,
    width: 11,
    marginLeft: -5,
    marginTop: 0,
    borderRadius: 1
  },
  track: {
    width: 1

  },
  thumb: {
    color: '#2f1544;',
    height: 3,
    width: 14,
    borderRadius: 10


  },
  rail: {
    width: 1,
    backgroundColor: '#2f1544',
    color: '#2f1544',
    opacity: 1
  },

  markLabel: {
    fontSize: 12,
    marginLeft: 0,
    marginTop: -6
  }


})(Slider);




function valuetext(value) {
  return `${value} `;
}

const useStyles = makeStyles(theme => ({
  margin: {
    "& .MuiSlider-thumb": {
      marginLeft : -6 ,
      marginRight : -2,
      marginBottom : 0
    }
  }
}));

export default function AmountSLider(props) {
  const { ingredient } = props;
  // const [sliderValue, setSLiderValue] = useState(props.ingredient.kosher_value * (ingredient.max - ingredient.min) + ingredient.min );
  const [sliderValue, setSLiderValue] = useState(props.ingredient.value);
  const classes = useStyles();

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

  // const classes = useStyles();


  return (
    <div className={classes.margin} style={{ height: '6vh' ,   float: 'right'
  }}>


      <StyledSlider
        
        value={sliderValue}
        orientation="vertical"

        onChange={handleChange}
        getAriaValueText={valuetext}
        aria-labelledby="vertical-slider"
        step={0.01}
        // min = {ingredient.min}
        // max = {ingredient.max}
        min={0}
        max={1}
        // valueLabelDisplay="auto"
        marks={marks}


      />
    </div>
  );
}
