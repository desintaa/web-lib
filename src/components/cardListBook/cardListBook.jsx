import './cardListBook.css'
import React from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { cutString } from '../../components/functions'

function cardListBook(props) {
    return(
        <Link to={`/detail/${props.title}`} style={{color: 'black', textDecoration: 'none'}}>
        <div className='myCard'>
            <div className="card shadow">
                <img src={props.imageUrl} className="card-img-top" alt="book cover image" />
                <div className="card-body">
                    <h4 className="card-title">{cutString(props.title,20)}</h4>
                    <p className="card-text">{cutString(props.desc,150)}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default cardListBook;