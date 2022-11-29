import './detail.css'
import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {title} = useParams()

    return (
        <>
        <div id='myBookDetail'>
            <div className='bookImageSmall'>
                <div>
                    <img src="images/img-dilan-1990.jpg" width="180px" />
                </div>
            </div>

            <div id='header'>
                <img className='headerImage' src='images/img-dilan-1990.jpg'/>
                <a id="back-button-on-detail" href="/training-bca/tugas-5-website-library/" role="button" className="btn btn-link" style={{position: 'fixed', top: 0, left: 0}}>
                    <img src="images/ic-arrow-left.png" width={'60px'} />
                </a>
                <a type="button" className="btn btn-link" style={{right: '150px'}} data-bs-toggle="modal" data-bs-target="#modal-edit-book"><h5>Edit</h5></a>
                <a type="button" className="btn btn-link" style={{right: '5vw'}} data-bs-toggle="modal" data-bs-target="#modal-delete-book"><h5>Delete</h5></a>
            </div>
            <div className='detailContent'>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{marginBottom: '20px'}}>
                                <button type="button" className="btn btn-warning text-white" style={{borderRadius: '15px', padding: '1px 20px', backgroundColor: '#FBCC38', border: 'none'}}>Novel</button>
                                <h1 style={{margin: '5px 0'}}><b>{title}</b></h1>
                                <p><b>30 Juni 2019</b></p>
                            </div>
                            <div className="col text-end" style={{padding: '40px 0'}}>
                                <h4 style={{color: '#99D815'}}><b>Available</b></h4>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar. Proin sit amet accumsan lectus. Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget. Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur. Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh, ac eleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis lacus. Nullam at elementum nibh, ac gravida felis. In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet euismod quis nec massa.</p>
                    </div>
                    <div className="col-1 text-center"></div>
                    <div className="col-3 text-end"  style={{position: 'relative'}}>
                        <button type="button" className="btn btn-warning mybuttonYellow shadow"><h5>Borrow</h5></button>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Detail