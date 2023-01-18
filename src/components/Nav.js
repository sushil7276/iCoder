import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';


const Nav = () => {
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Technology</Link></li>
                                    <li><Link className="dropdown-item" to="#">Web Pages</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contactus" ? "active" : ""}`} aria-current="page" to="/contactus">Contact us</Link>
                            </li>
                        </ul>
                        {/* <strong >
                            <Login />
                        </strong>
                        <strong>
                            <Signup />
                        </strong> */}
                        <div>
                            <Login />
                            <Signup />
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav