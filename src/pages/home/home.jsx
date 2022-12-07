import './home.css'
import React from "react";
import Navbar from '../../components/navbar/navbar';
import Carousel from "../../components/carousel/carousel.jsx";
import CardListBook from '../../components/cardListBook/cardListBook'
import { useState } from 'react';
import { useEffect } from 'react';
import { bookData } from '../../data-dummy/book-data'
import Sidebar from '../../components/sidebar/sidebar';

function Home() {

  const [detail, setDetail] = useState([])

  const getData = async () => {
    try {
      const {data} = bookData
      setDetail(data) // set detail method to read "data"
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, []) // array kosong -> mount
  
  return (
    <>
      {/* <Navbar/>
      <div id="main">
        <div className="new-book"><Carousel/></div>
        <div className="list-book">
          <h3>List Book</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {bookData.map((values) => {
              return <CardListBook 
                imageUrl = {values.imageUrl} 
                title = {values.title} 
                desc = {values.desc}
              />
            })}
          </div>
        </div>
      </div> */}

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
                  {bookData.map((values) => {
                    return <CardListBook 
                      imageUrl = {values.imageUrl} 
                      title = {values.title} 
                      desc = {values.desc}/>
                  })}
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