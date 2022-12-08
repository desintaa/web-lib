import './form.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'


function FormRegister() {

    const navigate = useNavigate()
    const goToLogin = useCallback(() => navigate('/login', {replace: true}, [navigate]))

    return (
        <>
        <main id="loginRegister" className='row' style={{width:'100%'}}>
        <div className="col-1 col-md-6 col-lg-7 bgImage" style={{height:'100vh'}}>
            <h1 className='mytext'><b>Book is a window to the world</b></h1>
        </div>
        <div className="col" style={{height:'100vh'}}>
            <div className="flex-container-col"  style={{height:'100vh'}}>
                <div className="rowTop text-end">
                    <img className='logoLibrary' src="images/ic-lib.png" alt="logo library"/>
                </div>
                <div className="rowMiddle">
                    <h1><b>Register</b></h1>
                    <p>Welcome Back, Please Register<br />to your account</p>
                    <div>
                        <form action method className="form-register">
                            <div className="card shadow" style={{width: '100%'}}>
                                <ul className="list-group list-group-flush">  
                                    <li className="list-group-item" style={{border: '1px solid #E0E0E0'}}>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" placeholder="Rebecca" />
                                    </li>
                                    <li className="list-group-item" style={{border: '1px solid #E0E0E0'}}>
                                        <label htmlFor="fullname">Full Name</label>
                                        <input type="text" id="fullname" placeholder="Rebecca Poetri Rizky" />                                    
                                    </li>
                                    <li className="list-group-item" style={{border: '1px solid #E0E0E0'}}>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="rebecca@gmail.com" />
                                    </li>
                                    <li className="list-group-item" style={{border: '1px solid #E0E0E0'}}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" placeholder="password" />
                                    </li>
                                </ul>
                            </div>
                            <div className="container-button">
                                <button className="btn btn-dark" id="button-register" type="submit">Sign Up</button>
                                {/* <Link to="/login">
                                    <button className="btn btn-outline-secondary">Login</button>
                                </Link> */}
                                    <button className="btn btn-outline-secondary" onClick={goToLogin}>Login</button>

                            </div> 
                        </form>
                    </div>
                </div>
                <div className="rowBottom">
                    <p>By signing up, you agree to Book's<br /><b className="mytext-black">Terms and Conditions</b> &amp; <b className="mytext-black">Privacy Policy</b></p>
                </div>
            </div>  
        </div>
      </main>
        </>
    )
}

export default FormRegister