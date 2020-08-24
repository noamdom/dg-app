import React from 'react';



const ChileCom = (props) => {
    console.log(props)

    return( 
        <>
        <input type="text" className="form-control" placeholder="write something..." onChange={ (e) => props.onChange(e.target.value)} />
        </>
    )

}


export default ChileCom;