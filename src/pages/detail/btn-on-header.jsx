import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../../data-dummy/Books';
import { useParams } from "react-router-dom";

function BtnsHeader() {
    
    // hide/show button edit and delete
    var isUserLogin = localStorage.getItem('isAuth')
    console.log(isUserLogin)

    // //CRUD (using react-redux)
    const bookList = useSelector((state) => state.books.value)
    const dispatch = useDispatch();
    var {title} = useParams()

    if (isUserLogin == 'true') {
        return(
            bookList
            .filter((data) => data.title === title)
            .map((data) =>
            <>
            <button id='btnEdit' type="button" className="btn btn-link" style={{right: '150px'}} data-bs-toggle="modal" data-bs-target="#modal-edit-book"><h5>Edit</h5></button>
            <button id='btnDelete' type="button" className="btn btn-link" style={{right: '5vw'}} data-bs-toggle="modal" data-bs-target="#modal-delete-book"
            onClick={() => {dispatch(deleteBook({id: data.id}))}}
            >
                <h5>Delete</h5>
            </button>
            </>
            ))
    } else {
        return(
            <>
            <Link to={'/login'}>
                <button id='btnLogin' type="button" className="btn btn-link" style={{right: '5vw'}} data-bs-toggle="modal"><h5>Edit/Delete book data</h5></button>
            </Link>
            </>
        )
    }

}

export default BtnsHeader