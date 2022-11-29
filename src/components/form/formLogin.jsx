import './form.css'
import React from 'react'

function FormLogin() {
    return (
        <main id="loginRegister" className='row' style={{width:'100%'}}>
            <div className="col-7 bgImage" style={{height:'100vh'}}>
                <h1 className='mytext'><b>Book is a window to the world</b></h1>
            </div>
            <div className="col-5" style={{height:'100vh'}}>
                <div className="flex-container-col"  style={{height:'100vh'}}>
                    <div className="rowTop text-end">
                        <img className='logoLibrary' src="images/ic-lib.png" alt="logo library"/>
                    </div>
                    <div className="rowMiddle">
                        <h1><b>Login</b></h1>
                        <p>Welcome Back, Please Login<br />to your account</p>
                        <div>
                            <form action method className="form-login">
                                <div className="card shadow" style={{width: '100%'}}>
                                    <ul className="list-group list-group-flush">                                
                                        <li className="list-group-item" style={{border: '1px solid #E0E0E0'}}>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email-login" placeholder="rebecca@gmail.com" />
                                        </li>
                                        <li className="list-group-item" style={{border: '1px solid #E0E0E0'}}>
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id="password-login" placeholder="password" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="container-button" style={{marginTop: '70px'}}>
                                    <a href='/' className="btn btn-dark" id="button-login" type="submit">Login</a>
                                    <a href="/register" className="btn btn-outline-secondary">Sign up</a>
                                </div> 
                            </form>
                        </div>
                        <div className="row" style={{margin: '20px 0px 0px 0px', width: '75%', position: 'absolute', bottom: '80px'}}>
                            <div className="col">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label mytext-gray" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                            </div>
                            <div className="col text-end">Forgot Password</div>
                        </div>
                    </div>
                    <div className="rowBottom">
                        <p>By signing up, you agree to Book's<br /><b className="mytext-black">Terms and Conditions</b> &amp; <b className="mytext-black">Privacy Policy</b></p>
                    </div>
                </div>  
            </div>
        </main>
    )
}

export default FormLogin