import React, { useState, useEffect } from "react";

export default function DietRestriction(props) {
    const [types, setTypes] = useState(
        ['Kosher', 'Katogenic', 'Vegan',]);



    return (

        <div className="container">

            <div className="card-deck">{
                types.map((item, idx) =>
                    <div className="col-lg-4 col-md-3 col-sm-6  col-12" key={idx} >
                        <div className="card my-3" >
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button type="button" className="btn btn-info" onClick={() => props.dietCLick(item)}>Cook</button>
                                </small>
                            </div>
                        </div>
                    </div>
                )
            }</div>

        </div>
    )
}
