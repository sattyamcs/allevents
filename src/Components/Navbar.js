import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            //Anchor tag is replaced by Link for making the page Single Page Appliction.
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/all" style={{fontWeight:"bold"}}>ALLEVENTS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/all">All</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/music">Music</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/workshops">Workshops</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="form-check form-switch text">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                List
                            </label>
                        </div> */}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

