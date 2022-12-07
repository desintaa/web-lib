import './sidebar.css'
import React from "react"
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()

    var isUserLogin = localStorage.getItem('isAuth')
    console.log(isUserLogin)

    function logout() {
        navigate('/', {replace:true}, [navigate])
        localStorage.setItem("isAuth","false")
    }

    if (isUserLogin == 'true') {
        return(
            <>
            {/* if user login */}
            <div id="mySideNav" className="sidenav">
                <div id="sideNavUserProfile">
                    <img src="images/photo-user.png" width="120px" alt="photo-user" style={{margin: '15px 0'}} />
                    <h4><b>Niki Zefanya</b></h4>
                    {/* <Link to="/"> */}
                        <a id='btnLogout' type="button" className="btn" onClick={(() => {logout()})} style={{padding: '3px 13px', borderColor: '#DBDBDB', borderRadius: '8px'}}>
                            <img src="images/ic-logout.png" height="20px" style={{marginRight: '5px'}} />
                            <b>Logout</b>
                        </a>
                    {/* </Link> */}
                </div>
                <div id="sideNavMenu">
                    <a type="button" className="btn btn-link">
                        <h5><b>Explore</b></h5>
                    </a>
                    <br />
                    <a type="button" className="btn btn-link">
                        <h5><b>History</b></h5>
                    </a>
                    <br />
                    <a type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#modal-add-book">
                        <h5><b>Add Book</b></h5>
                    </a>
                </div>
            </div>
            </>
        )
    } else {
        return(
            <>
            {/* if user not login */}
            <div id="mySideNav2" className="sidenav">
                <Link to="/login">
                    <button id='btnLogin'className="btn btn-outline-dark" style={{padding: '3px 13px', borderColor: '#DBDBDB', borderRadius: '8px'}}>
                        <b>Login</b>
                    </button>    
                </Link>
                <h6>or</h6>
                <Link to="/register">
                    <button id='btnRegister'className="btn btn-outline-dark" style={{padding: '3px 13px', borderColor: '#DBDBDB', borderRadius: '8px'}}>
                        <b>Register</b>
                    </button>
                </Link>
                <h6>to access this menu</h6>
            </div>
            </>
        )
    }
    
    // return(
    //     <>
    //     {/* MODAL ADD BOOK | using bootstrap */}
    //     <div className="modal fade" id="modal-add-book" tabIndex={-1} aria-labelledby="button-add" aria-hidden="true">
    //         <div className="modal-dialog modal-xl modal-dialog-centered">
    //             <div className="modal-content" style={{padding: '2vh 2vw'}}>
    //             <div className="text-end" style={{marginTop: '10px'}}>
    //                 <a type="button" data-bs-dismiss="modal"><img src="images/ic-cross.png" height="20px" /></a>
    //             </div>
    //             <div className="modal-body text-start" style={{padding: '2vh 2vw'}}>
    //                 <h3 className="mb-3">Add data</h3>
    //                 <form>
    //                 <div className="row g-3 align-items-center mb-3">
    //                     <div className="col-3"><label htmlFor="add-url-image" className="form-label">Url Image</label></div>
    //                     <div className="col-9"><input type="url" className="form-control" id="add-url-image" placeholder="Url Image ..." /></div>
    //                 </div>
    //                 <div className="row g-3 align-items-center mb-3">
    //                     <div className="col-3"><label htmlFor="add-book-title" className="form-label">Title</label></div>
    //                     <div className="col-9"><input type="text" className="form-control" id="add-book-title" placeholder="Title ..." /></div>
    //                 </div>
    //                 <div className="row g-3 align-items-center mb-3">
    //                     <div className="col-3"><label htmlFor="add-book-description" className="form-label ">Description</label></div>
    //                     <div className="col-9"><textarea className="form-control" name="description" rows={4} cols={30} placeholder="Description" defaultValue={""} /> </div>
    //                 </div>
    //                 <div className="row g-3 align-items-center text-end">
    //                     <div className="col-9" />
    //                     <div className="col-3"><button type="submit" className="btn btn-primary text-white shadow" style={{backgroundColor: '#FBCC38', border: 'none', padding: '10px 30px'}}>Save</button></div>
    //                 </div>
    //                 </form>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )
}

export default Sidebar