import React, { useState, useEffect } from "react";
import lettuce_wrap_icon from '../images/lettuce-wrap.png';
import stir_fry_icon from '../images/stir-fry.png';
import carrot_cake_icon from '../images/carrot-cake.png';
import { Spinner } from 'react-bootstrap';



export default function Menu(props) {
    const [menu, setMenu] = useState(props.data);

    const match_img = (dish_name) => {
        if (dish_name.startsWith('Lettuce')) {
            return lettuce_wrap_icon;
        } else if (dish_name.startsWith('Stir')) {
            return stir_fry_icon;
        } else {//  == carrot 
            return carrot_cake_icon;
        }
    }

    return (
        <div className="container my-5">

            <div className="card-deck justify-content-around">

                {

                    menu.map(item =>
                        <div className="col-lg-3 col-md-4 col-sm-5  " key={item.id} >
                            <div className="card my-3 text-center " style={{ borderColor: "var(--secondary)", borderRadius: "30px" }}  >
                                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                                <div className="card-body p-1">
                                    <h5 className="card-title font-weight-bold m-1" style={{ color: "var(--secondary)" }}>{item.name}</h5>

                                    <small className="text-muted">
                                        <button type="button" className="btn p-1 " onClick={() => props.pickRecipe(item)}>
                                            <img src={match_img(item.name)} alt="dish icon" style={{ height: "50%", width: "50%" }} />
                                        </button>
                                    </small>
                                </div>
                            </div>
                        </div>

                    )


                }
            </div>

        </div>
    )
}
