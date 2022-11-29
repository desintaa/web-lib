import './home.css'
import React from "react";
import Navbar from '../../components/navbar/navbar.jsx'
import Carousel from "../../components/carousel/carousel.jsx";
import CardListBook from '../../components/cardListBook/cardListBook'
import { useState } from 'react';
import { useEffect } from 'react';

const bookData = [
  {
    id: '1',
    imageUrl: 'images/header-dilan-1991.png',
    title: 'Dilan 1990',
    author: 'Pidi Baiq',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi. Leo duis ut diam quam nulla porttitor.'
  },
  {
    id: '2',
    imageUrl: 'images/img-ubur-ubur.jpg',
    title: 'Ubur-ubur Lembur',
    author: 'Raditya Dika',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Tristique magna sit amet purus gravida quis blandit.'
  },
  {
    id: '3',
    imageUrl: 'images/img-laskar-pelangi.jpg',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nam aliquam sem et tortor consequat id porta nibh venenatis.'
  },
  {
    id: '4',
    imageUrl: 'images/img-laut-bercerita.jpg',
    title: 'Laut Bercerita',
    author: 'Leila Chudori',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Interdum velit euismod in pellentesque massa placerat.'
  },
  {
    id: '5',
    imageUrl: 'images/img-matahari-minor.png',
    title: 'Matahari Minor',
    author: 'Tere Liye',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu. Nec feugiat nisl pretium fusce id.'
  },
  {
    id: '6',
    imageUrl: 'images/img-sagaras.jpeg',
    title: 'Sagaras',
    author: 'Tere Liye',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi. Leo duis ut diam quam nulla porttitor.'
  },
  {
    id: '7',
    imageUrl: 'images/img-mantappu-jiwa.jpg',
    title: 'Mantappu Jiwa',
    author: 'Jerome Polin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Tristique magna sit amet purus gravida quis blandit.'
  },
  {
    id: '8',
    imageUrl: 'images/img-sebuah-seni.jpg',
    title: 'Sebuah Seni Untuk Bersikap Bodo Amat',
    author: 'Mark Manson',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nam aliquam sem et tortor consequat id porta nibh venenatis.'
  },
  {
    id: '9',
    imageUrl: 'images/img-segala-galanya.jpg',
    title: 'Segala Galanya Ambyar',
    author: 'Mark Manson',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Interdum velit euismod in pellentesque massa placerat.'
  },
  {
    id: '10',
    imageUrl: 'images/img-jika-kita.jpg',
    title: 'Jika Kita Tak Pernah Jadi Apa-Apa',
    author: 'Alvi Syahrin',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu. Nec feugiat nisl pretium fusce id.'
  },
]

function Home() {

  const [detail, setDetail] = useState([])

  const getData = async () => {
    try {
      const {data} = bookData
      setDetail(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <Navbar/>
      <div id="main">
        <div className="new-book"><Carousel/></div>
        <div className="list-book">
          <h3>List Book</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {bookData.map((values) => {
              return <CardListBook imageUrl = {values.imageUrl} title = {values.title} desc = {values.desc}/>
            })}
          </div>
        </div>
      </div>
    </>    
  )
}

export default Home