import './carousel.css'
import React from "react";
import Cardheader from '../cardHeader/cardHeader'
import Flickity from 'react-flickity-component'
import { bookData } from '../../data-dummy/book-data'
import { cutString, isHeaderEmpty } from '../../components/functions'

// const bookData = [
//     {
//       id: '1',
//       imageUrl: 'https://drive.google.com/uc?export=view&id=1-0yHFtoBjJFrwqgCrfAJ8TW2I0GoAmai',
//       title: 'Dilan 1990',
//       author: 'Pidi Baiq',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies integer quis auctor elit sed vulputate mi. Leo duis ut diam quam nulla porttitor.'
//     },
//     {
//       id: '2',
//       imageUrl: 'https://drive.google.com/uc?export=view&id=15Eu39JrGhN0r7hIJ5AMTT9KzXTxTF6OC',
//       title: 'Ubur-ubur Lembur',
//       author: 'Raditya Dika',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Tristique magna sit amet purus gravida quis blandit.'
//     },
//     {
//       id: '3',
//       imageUrl: 'https://drive.google.com/uc?export=view&id=19P3gtw2K6VD56Q1Nbi6dceTgKu7KjSG2',
//       title: 'Laskar Pelangi',
//       author: 'Andrea Hirata',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nam aliquam sem et tortor consequat id porta nibh venenatis.'
//     },
//     {
//       id: '4',
//       imageUrl: 'https://drive.google.com/uc?export=view&id=1sJpjZbVgOvLeCwXDTuSnKqnKyFYs7XLB',
//       title: 'Laut Bercerita',
//       author: 'Leila Chudori',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Interdum velit euismod in pellentesque massa placerat.'
//     },
//     {
//       id: '5',
//       imageUrl: 'https://drive.google.com/uc?export=view&id=1BbWk9y7h1tyyEmlfiFRpXX9tUbmBMDhy',
//       title: 'Matahari Minor',
//       author: 'Tere Liye',
//       desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu. Nec feugiat nisl pretium fusce id.'
//     },
//   ]

var headerData = [bookData[7],bookData[1],bookData[2],bookData[3],bookData[4]]

function Carousel() {
        return (
            <Flickity className="carousel" data-flickity='{ "freeScroll": true, "wrapAround": true, "pageDots": false }'>
                {headerData.map((value) => {

                    return (
                      <div className="carousel-cell">
                          <Cardheader
                              imageUrl = {isHeaderEmpty(value)}
                              title = {cutString(value.title,25)} // if title >25 chars, trim the title
                              author = {value.author}
                          />
                      </div>
                    )
                })}
            </Flickity>
        )
}

export default Carousel