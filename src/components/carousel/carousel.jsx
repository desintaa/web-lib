import './carousel.css'
import React from "react";
import Cardheader from '../cardHeader/cardHeader'
import Flickity from 'react-flickity-component'

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
      imageUrl: 'images/header-ubur-ubur.png',
      title: 'Ubur-ubur Lembur',
      author: 'Raditya Dika',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Tristique magna sit amet purus gravida quis blandit.'
    },
    {
      id: '3',
      imageUrl: 'images/header-laskar-pelangi.jpg',
      title: 'Laskar Pelangi',
      author: 'Andrea Hirata',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Nam aliquam sem et tortor consequat id porta nibh venenatis.'
    },
    {
      id: '4',
      imageUrl: 'images/header-laut-bercerita.jpg',
      title: 'Laut Bercerita',
      author: 'Leila Chudori',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Interdum velit euismod in pellentesque massa placerat.'
    },
    {
      id: '5',
      imageUrl: 'images/header-matahari minor.jpg',
      title: 'Matahari Minor',
      author: 'Tere Liye',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu. Nec feugiat nisl pretium fusce id.'
    },
  ]

function Carousel() {
        return (
            <Flickity className="carousel" data-flickity='{ "freeScroll": true, "wrapAround": true, "pageDots": false }'>
                {bookData.map((value) => {
                    return (
                        <div className="carousel-cell">
                            <Cardheader
                                imageUrl = {value.imageUrl}
                                title = {value.title}
                                author = {value.author}
                            />
                        </div>
                    )
                })}
            </Flickity>
        )
}

export default Carousel