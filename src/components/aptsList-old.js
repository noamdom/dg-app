import React, { Component } from 'react';
import '../css/apts.css';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment'


// css if apts.css only on ingerdientLost
// date format using react-moment


class IngredientList extends Component {
    
    render() {
        return (
            <div>
                <div className="appointment-list item-list mb-3">
                    {this.props.appointments.map ( item => (
                        <div className="pet-item col media py-3" key={item.aptId}>
                        <div className="mr-3">
                            <button className="pet-delete btn btn-sm btn-danger"><FaTimes /></button>
                        </div>

                        <div className="pet-info media-body">
                            <div className="pet-head d-flex">
                                <span className="pet-name">{item.petName}</span>
                                <span className="apt-date ml-auto">
                                    <Moment 
                                        date={item.aptDate}
                                        parse="YY-MM-dd hh:mm"
                                        format="D/MM h:mma"
                                        />
                                    </span>
                            </div>

                            <div className="owner-name">
                                <span className="label-item">Owner: </span>
                                <span>{item.ownerName}</span>
                            </div>
                            <div className="apt-notes">{item.aptNotes}</div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}


export default IngredientList;