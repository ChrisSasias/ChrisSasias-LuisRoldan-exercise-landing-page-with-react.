import React from "react";
import ReactDOM from "react-dom";

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex">
            <a className="navbar-brand p-2 w-100" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-2 flex-shrink-1" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
};

export default Navbar;