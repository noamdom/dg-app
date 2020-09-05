import React, { useState, useEffect } from "react";
import vegan_icon from '../images/vegan-icon.png'
import kosher_icon from '../images/kosher-icon.png'
import ketogenic_icon from '../images/ketogenic-icon.png'


export default function DietRestriction(props) {
    const [types, setTypes] = useState(
        ['Kosher', 'Katogenic', 'Vegan',]);

        const match_img = (dish_name) => {
            if(dish_name.startsWith('Kosher')) {
                return kosher_icon;
            } else if (dish_name.startsWith('Vegan')) {
                return vegan_icon;
            } else {//  == carrot 
                return ketogenic_icon;
            }
        }

    return (

        <div className="container my-md-5 my-sm-1">

            <div className="card-deck justify-content-around">{
                types.map((item, idx) =>
                    <div className="col-lg-3 col-md-4 col-sm-5  " key={idx} >
                        <div className="card my-3 text-center "style={{ borderColor: "var(--secondary)" , borderRadius: "30px" }}  >

                            <div className="card-body p-1">
                                <h4 className="card-title font-weight-bold m-1">{item}</h4>
                                <button type="button" className="btn p-1 " onClick={() => props.dietCLick(item)}>
                                    <img src={match_img(item)} alt="dish icon" style={{ height: "55%", width: "55%" }} />
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }</div>

        </div>
    )
}
