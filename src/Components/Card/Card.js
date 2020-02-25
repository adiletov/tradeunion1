import React, {Component} from 'react';
import logotype from "../../Assets/Images/logotype.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {apiURL} from "../../apiURL";
import {NavLink} from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <div>
                {this.props.publications && this.props.publications.map(key =>
                    <div className="mb-3 pageBlock" style={{'height' : '200px'}} >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {key.image === 'no image' ? <img className="card-img imgPub"  style={{'height' : '178px'}}  src={logotype} alt="not found"/> :
                                    <img className="card-img imgPub" style={{'height' : '178px'}} src={apiURL + '/uploads/'+ key.image} alt={key.heading}/>
                                }
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title headingTxt">{key.heading}</p>
                                    <p className="card-text" style={{'maxHeight' : '68px', 'overflow': 'hidden'}} >{key.description}</p>
                                    <p className="card-text"><small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt}/> {key.date}</small>
                                        <NavLink to={`/publications/${key.id}`}>  подробнее...</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Card;