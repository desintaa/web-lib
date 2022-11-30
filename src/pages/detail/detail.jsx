import './detail.css'
import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    // const {title} = useParams()

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
                <a id="back-button-on-detail" href="/" role="button" className="btn btn-link" style={{position: 'fixed', top: 0, left: 0}}>
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
                                <h1 style={{margin: '5px 0'}}><b>dilan</b></h1>
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

            {/* MODAL EDIT | using bootstrap */}
            <div className="modal fade" id="modal-edit-book" tabIndex={-1} aria-labelledby="button-edit" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content" style={{padding: '2vh 2vw'}}>
                <div className="text-end" style={{marginTop: '10px'}}>
                    <a type="button" data-bs-dismiss="modal"><img src="images/ic-cross.png" height="20px" /></a>
                </div>
                <div className="modal-body text-start" style={{padding: '2vh 2vw'}}>
                    <h3 className="mb-3">Edit data</h3>
                    <form>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3"><label htmlFor="edit-url-image" className="form-label">Url Image</label></div>
                        <div className="col-9"><input type="url" className="form-control" id="edit-url-image" placeholder="http://gambar.com/dilan.jpg" /></div>
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3"><label htmlFor="edit-book-title" className="form-label">Title</label></div>
                        <div className="col-9"><input type="text" className="form-control" id="edit-book-title" placeholder="Dilan 1990" /></div>
                    </div>
                    <div className="row g-3 align-items-center mb-3">
                        <div className="col-3"><label htmlFor="edit-book-description" className="form-label">Description</label></div>
                        <div className="col-9"><textarea className="form-control" name="description" rows={4} cols={30} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar." defaultValue={""} /> </div>
                    </div>
                    <div className="row g-3 align-items-center text-end">
                        <div className="col-9" />
                        <div className="col-3"><button type="submit" className="btn btn-primary mybuttonYellow shadow">Save</button></div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>

            {/* MODAL DELETE | using bootstrap */}
            <div className="modal fade" id="modal-delete-book" tabIndex={-1} aria-labelledby="button" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{padding: '2vh 2vw 3vh 2vw'}}>
                <div className="text-end" style={{marginTop: '10px'}}>
                    <a type="button" data-bs-dismiss="modal"><img src="images/ic-cross.png" height="20px" /></a>
                </div>
                <div className="modal-body text-center">
                    <img src="images/ic-check.png" height="80%" />                            
                    <h5><br />Data <b>Dilan 1990</b> berhasil dihapus !</h5>
                </div>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}

export default Detail