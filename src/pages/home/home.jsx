import './home.css';
import React, { useState, useEffect } from "react";
import Navbar from '../../components/navbar/navbar';
import Carousel from "../../components/carousel/carousel.jsx";
import CardListBook from '../../components/cardListBook/cardListBook';
import Sidebar from '../../components/sidebar/sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { bookData } from '../../data-dummy/book-data';
import { addBook } from '../../data-dummy/Books'

function Home() {

  const [detail, setDetail] = useState([])

  const getData = async () => {
    try {
      const {data} = bookData
      setDetail(data) // set detail method to read "data"
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, []) // array kosong -> mount

  //CRUD (using react-redux)
  const bookList = useSelector((state) => state.books.value)
  const dispatch = useDispatch();
  const [headerUrl, setHeaderUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setDesc] = useState('');
  
  return (
    <>
    <div id="home">
      <div className="row">

        <div id="sidebar" className='col-12 col-lg-3 shadow'>
          <div>
            <Sidebar/>
          </div>
        </div>

        <div id="content" className='col'>
          <div id="navbar" className=''>
            <Navbar/>
          </div>
          <div id="main" className=''>
            <div className="new-book"><Carousel/></div>
              <div className="list-book">
                <h3>List Book</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                  {bookList.map((book) => {
                    return <CardListBook 
                      imageUrl = {book.imageUrl} 
                      title = {book.title} 
                      desc = {book.desc}/>
                  })}
                </div>
              </div>
            </div>
        </div>
        
        <div id="modal-add-book" className="modal fade" tabIndex={-1} aria-labelledby="button-add" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content" style={{padding: '2vh 2vw'}}>
                <div className="text-end" style={{marginTop: '10px'}}>
                    <a type="button" data-bs-dismiss="modal"><img src="images/ic-cross.png" height="20px" /></a>
                </div>
                <div className="modal-body text-start" style={{padding: '2vh 2vw'}}>
                    <h3 className="mb-3">Add data</h3>
                    <div>
                      <div className="row g-3 align-items-center mb-3">
                          <div className="col-3">
                            <label htmlFor="add-url-image" className="form-label">Url Image</label>
                          </div>
                          <div className="col-9">
                            <input id="add-image" type="url" className="form-control" onChange={(e) => {setImageUrl(e.target.value)}} placeholder="Url Image ..." />
                          </div>
                      </div>
                      <div className="row g-3 align-items-center mb-3">
                          <div className="col-3">
                            <label htmlFor="add-book-title" className="form-label">Title</label>
                          </div>
                          <div className="col-9">
                            <input id="add-title" type="text" className="form-control" onChange={(e) => {setTitle(e.target.value)}} placeholder="Title ..." />
                          </div>
                      </div>
                      <div className="row g-3 align-items-center mb-3">
                          <div className="col-3">
                            <label htmlFor="add-book-author" className="form-label">Author</label>
                          </div>
                          <div className="col-9">
                            <input id="add-author" type="text" className="form-control" onChange={(e) => {setAuthor(e.target.value)}} placeholder="Author ..." />
                          </div>
                      </div>
                      <div className="row g-3 align-items-center mb-3">
                          <div className="col-3">
                            <label htmlFor="add-book-description" className="form-label ">Description</label>
                          </div>
                          <div className="col-9">
                            <textarea id='add-desc' className="form-control" name="description" onChange={(e) => {setDesc(e.target.value)}} rows={4} cols={30} placeholder="Description" defaultValue={""} /> 
                          </div>
                      </div>
                      <div className="row g-3 align-items-center text-end">
                          <div className="col-9" />
                          <div className="col-3">
                            <button className="btn btn-primary text-white shadow" style={{backgroundColor: '#FBCC38', border: 'none', padding: '10px 30px'}} 
                            onClick={() => {dispatch(addBook({
                              id: bookList[bookList.length - 1].id + 1,
                              headerUrl:'', 
                              imageUrl, 
                              title, 
                              author, 
                              desc
                            }))}}  data-bs-dismiss="modal">Save</button>
                          </div>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default Home