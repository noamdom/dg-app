import React, { useState, useEffect } from "react";
import vegan_icon from '../images/vegan-icon.png'


export default function DietRestriction(props) {
    const [types, setTypes] = useState(
        ['Kosher', 'Katogenic', 'Vegan',]);



    return (

        <div className="container">

            <div className="card-deck justify-content-around">{
                types.map((item, idx) =>
                    <div className="col-lg-4 col-md-3 col-sm-6  col-12" key={idx} >
                        <div className="card my-3 text-center "style={{ borderColor: "var(--secondary)" , borderRadius: "30px" }}  >

                            <div className="card-body">
                                <h4 className="card-title font-weight-bold">{item}</h4>
                                <button type="button" className="btn " onClick={() => props.dietCLick(item)}>
                                    <img src={vegan_icon} alt="dish icon" style={{ height: "80%", width: "80%" }} />
                                </button>

                            </div>
                        </div>
                    </div>
                )
            }</div>

        </div>
    )
}
