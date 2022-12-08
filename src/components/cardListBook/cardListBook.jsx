import './cardListBook.css'
import React from "react"
import { Link } from 'react-router-dom'
import { cutString } from '../../components/functions'
import { scrollToTop } from '../../components/functions'

function cardListBook(props) {
    
    return(
        <div className='myCard'>
            <Link to={`/detail/${props.title}`} style={{color: 'black', textDecoration: 'none'}}>
            <div className="card shadow" onClick={scrollToTop}>
                <img src={props.imageUrl} className="card-img-top" alt="book cover image not available" />
                <div className="card-body">
                    <h4 className="card-title">{cutString(props.title,20)}</h4>
                    <p className="card-text">{cutString(props.desc,150)}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default cardListBook;