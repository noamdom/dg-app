import React, { Component } from 'react';

class FormError extends Component {
    render() {
        const {theMsg} = this.props;

        return(
            <div className="col-12 alert alert-danger px-3">
                    {theMsg}
            </div>
        ) 
    }
} 

export default FormError;