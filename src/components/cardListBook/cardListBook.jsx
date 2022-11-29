import './cardListBook.css'
import React from "react"
import { Link } from 'react-router-dom'

function cardListBook(props) {
    return(
        <Link to={`/detail/${props.title}`} style={{color: 'black', textDecoration: 'none'}}>
        <div className='myCard'>
            <div className="card shadow">
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default cardListBook;