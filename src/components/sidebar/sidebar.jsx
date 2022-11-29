import './sidebar.css'
import React from "react"

function Sidebar() {

    return(
        <div id="mySideNav" className="sidenav shadow" style={{width: '30vw'}}>
            <div style={{textAlign: 'end', padding: '10px'}}>
                <a className="closebtn" onClick="closeNav()"><img src="images/ic-menu.png" alt="logo-menu" /></a>
            </div>
            <div id="sideNavUserProfile">
                <img src="images/photo-user.png" width="43%" alt="photo-user" style={{margin: '15px 0'}} />
                <h4><b>Niki Zefanya</b></h4>
                <a href="/login" type="button" className="btn btn-outline-dark" style={{padding: '3px 13px', borderColor: '#DBDBDB', borderRadius: '8px'}}><img src="images/ic-logout.png" height="20px" style={{marginRight: '5px'}} /><b>Logout</b></a>
            </div>
            <div id="sideNavMenu">
                <a type="button" className="btn btn-link text-decoration-none text-dark" style={{padding: 0}}>
                    <h5><b>Explore</b></h5>
                </a>
                <br />
                <a type="button" className="btn btn-link text-decoration-none text-dark" style={{padding: 0}}>
                    <h5><b>History</b></h5>
                </a>
                <br />
                {/* Button Add Book */}
                <a type="button" className="btn btn-link text-decoration-none text-dark" style={{padding: 0}} data-bs-toggle="modal" data-bs-target="#modal-add-book">
                    <h5><b>Add Book</b></h5>
                </a>
            </div>
        </div>
    )
}

export default Sidebar