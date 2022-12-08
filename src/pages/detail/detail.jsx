import './detail.css'
import React, {useState} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { isHeaderEmpty } from '../../components/functions'
import BtnsHeader from './btn-on-header'
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../../data-dummy/Books';

function Detail({props}) {
    var {title} = useParams()

    const navigate = useNavigate()

    //CRUD (using react-redux)
    const bookList = useSelector((state) => state.books.value)
    const dispatch = useDispatch();
    const [newImageUrl, setNewImageUrl] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newDesc, setNewDesc] = useState('');

    return (
        <>
        {
            bookList
            .filter((data) => data.title === title)
            .map((data) =>
            <>
            
            <div id='myBookDetail'>
                <div id='thumbnail'>
                    <div>
                        <img className='bookImageSmall shadow-lg' src={data.imageUrl} alt='book cover' width="180px" />
                    </div>
                </div>

                <div id='header'>
                    <img className='headerImage' src={isHeaderEmpty(data)} alt='book cover for header'/>
                    <a id="back-button-on-detail" role="button" onClick={() => navigate(-1)} className="btn btn-link" style={{position: 'fixed', top: 0, left: 0}}>
                        <img src="https://drive.google.com/uc?export=view&id=1wFapdo0OsaoAPU2pj4Q2bkVH1urXnD6m" alt='left arrow icon' width={'60px'}/>
                    </a>
                    <BtnsHeader/>
                </div>
                <div className='detailContent'>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{marginBottom: '20px'}}>
                                    <button type="button" className="btn btn-warning text-white" style={{borderRadius: '15px', padding: '1px 20px', backgroundColor: '#FBCC38', border: 'none'}}>Novel</button>
                                    <h1 style={{margin: '5px 0'}}><b>{title}</b></h1>
                                    <p><b>{data.author}</b></p>
                                </div>
                                <div className="col text-end" style={{padding: '40px 0'}}>
                                    <h4 style={{color: '#99D815'}}><b>Available</b></h4>
                                </div>
                            </div>
                            <p>{data.desc}</p>
                        </div>
                        <div className="col-1 text-center"></div>
                        <div className="col-3 text-end"  style={{position: 'relative'}}>
                            <button type="button" className="btn btn-warning mybuttonYellow shadow"><h5>Borrow</h5></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL EDIT | using bootstrap */}
            <div className="modal fade" id="modal-edit-book" tabIndex={-1} aria-labelledby="button-edit" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content" style={{padding: '2vh 2vw'}}>
                <div className="text-end" style={{marginTop: '10px'}}>
                    <a type="button" data-bs-dismiss="modal"><img src="https://drive.google.com/uc?export=view&id=1UvlM0WccFqfQzQe2yN3YiwdZHd0BLB_G" alt='cross icon' height="20px" /></a>
                </div>
                <div className="modal-body text-start" style={{padding: '2vh 2vw'}}>
                    <h3 className="mb-3">Edit data</h3>
                    <div>
                        <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                                <label htmlFor="edit-url-image" className="form-label">Url Image</label>
                            </div>
                            <div className="col-9">
                                <input id="edit-image" type="url" className="form-control"  onChange={(e) => {setNewImageUrl(e.target.value)}}  defaultValue={data.imageUrl} placeholder="http://gambar.com/dilan.jpg" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                                <label htmlFor="edit-book-title" className="form-label">Title</label>
                            </div>
                            <div className="col-9">
                                <input id="edit-title" type="text" className="form-control"  onChange={(e) => {setNewTitle(e.target.value)}}  defaultValue={data.title} placeholder="Dilan 1990" disabled/>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                                <label htmlFor="edit-book-author" className="form-label">Author</label>
                            </div>
                            <div className="col-9">
                                <input id="edit-author" type="text" className="form-control"  onChange={(e) => {setNewAuthor(e.target.value)}}  defaultValue={data.author} placeholder="Pidi Baiq" />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center mb-3">
                            <div className="col-3">
                                <label htmlFor="edit-book-description" className="form-label">Description</label>
                            </div>
                            <div className="col-9">
                                <textarea id="edit-desc" className="form-control"  onChange={(e) => {setNewDesc(e.target.value)}}  name="description" rows={4} cols={30} defaultValue={data.desc} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar."/> 
                            </div>
                        </div>
                        <div className="row g-3 align-items-center text-end">
                            <div className="col-9" />
                            {/* <Link to={`/detail/${newTitle}`}> */}
                                <div className="col-3">
                                    <button className="btn btn-primary mybuttonYellow shadow"
                                    onClick={() => {dispatch(updateBook({
                                        id: data.id, 
                                        author: newAuthor,
                                        desc: newDesc,
                                        imageUrl: newImageUrl
                                    }))}} 
                                    data-bs-dismiss="modal">
                                        Save
                                    </button>
                                </div>
                            {/* </Link> */}
                            {console.log('JUDUL BARU '+ newAuthor)}
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* MODAL DELETE | using bootstrap */}
            <div className="modal fade" id="modal-delete-book" tabIndex={-1} aria-labelledby="button" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{padding: '2vh 2vw 3vh 2vw'}}>
                    <div className="text-end" style={{marginTop: '10px'}}>
                        <a type="button" data-bs-dismiss="modal"><img src="https://drive.google.com/uc?export=view&id=1UvlM0WccFqfQzQe2yN3YiwdZHd0BLB_G" alt='cross icon' height="20px" /></a>
                        {/* <a type="button" onClick={() => {dispatch(deleteBook({id: data.id}))}} data-bs-dismiss="modal"><img src="https://drive.google.com/uc?export=view&id=1UvlM0WccFqfQzQe2yN3YiwdZHd0BLB_G" alt='cross icon' height="20px" /></a> */}
                    </div>
                    <div className="modal-body text-center">
                        <img src="https://drive.google.com/uc?export=view&id=18-RS-qM7_eNf0IdNLYlyHxypDZgNMNZN" height="80%" alt='check icon'/>                            
                        <h5><br />Data buku <b>{title}</b> berhasil dihapus !</h5>
                    </div>
                    </div>
                </div>
            </div>
            </>
            )
        }
        </>
    )
}

export default Detail