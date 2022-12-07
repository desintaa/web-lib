import './navbar.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { toggleSideBar } from '../functions'

const iconSearch = <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>

function Navbar() {
    return(
        <header className="shadow">
            <nav id="myNavBar" className="d-flex flex-row justify-content-between mx-4 my-1">
                
                <div id="btnSideBar" className="p-2">
                    <div style={{padding: '5px 0px', marginRight: '10px'}}>
                        <a role={"button"} onClick={toggleSideBar}>
                            <img src="images/ic-menu.png" />
                        </a>
                    </div>
                </div>

                <div id='allCategories' className="p-2">
                    <a style={{padding: '5px 0px'}} className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories</a>
                    <ul className="dropdown-menu shadow" style={{border: 'none'}}>
                        <li><a className="dropdown-item" href="#">Action and Adventure</a></li>
                        <li><a className="dropdown-item" href="#">Children</a></li>
                        <li><a className="dropdown-item" href="#">Fantasy</a></li>
                        <li><a className="dropdown-item" href="#">Horror</a></li>
                        <li><a className="dropdown-item" href="#">Romance</a></li>
                        <li><a className="dropdown-item" href="#">Science Fiction</a></li>
                    </ul>                
                </div>

                <div id='allTime' className="p-2">
                    <a style={{padding: '5px 0px'}} className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">All Time</a>
                    <ul className="dropdown-menu" style={{border: 'none'}}>
                        <li><a className="dropdown-item" href="#">Past week</a></li>
                        <li><a className="dropdown-item" href="#">Past month</a></li>
                        <li><a className="dropdown-item" href="#">Past year</a></li>
                        <li><a className="dropdown-item" href="#">Older</a></li>
                    </ul>
                </div>

                <div id='searchBar' className="p-2 flex-grow-1 text-center">
                    <div className="search-container">
                        <div className="search-box">
                            <div className="search-icon">
                                {iconSearch}
                            </div>
                            <div className="search-input">
                                <input type="text" className="input" placeholder="Search book" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-1">
                    <div style={{padding: '3px 0px'}}>
                        <img src="images/ic-lib.png" height="40px" />
                    </div>
                </div>

                <div className="py-2 pe-2">
                    <h4 style={{padding: '5px 0px'}}>Library</h4>
                </div>

            </nav>                
        </header>
    )
}

export default Navbar