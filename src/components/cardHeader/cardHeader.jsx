import './cardHeader.css'
import React from "react";

function CardHeader(props) {
    return (
        <div className="carousel-cell">
        <div className="card mycard-header">
            <img src={props.imageUrl} alt="book cover image for header"/>
            <div className="mycard-body text-white">
                <h1 className="card-title mt-3 mx-3">{props.title}</h1>
                <p className="card-text mb-3 mx-3" style={{fontSize: 'larger'}}>{props.author}</p>
            </div>
        </div>
        </div>
    )   
}

export default CardHeader