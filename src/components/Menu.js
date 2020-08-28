import React, { useState, useEffect } from "react";


export default function Menu(props) {
    const [menu, setMenu] = useState(props.data);

    return (
        <div className="container">


            <div className="card-deck">
              
                {
                    // .filter(item =>
                    //     item.name.toLowerCase().match(this.props.filterRecipe.toLowerCase())
                    // )

                    menu?.map(item =>
                        <div className="col-lg-3 col-md-4 col-sm-6  col-12" key={item.id} >
                            <div className="card my-3" >
                                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural
                             lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        <button type="button" className="btn btn-info" onClick={() => props.pickRecipe(item)}>Cook</button>
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
