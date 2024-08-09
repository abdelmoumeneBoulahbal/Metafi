/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './card.css';

const Card = ({link, title, descrip}) => {
    return(
        <div className="card">
            <div className="img-card-cont">
                <img src={link} className="card-logo"></img>
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-descrip">
                {descrip}
            </p>
        </div>

    );
}

export default Card;