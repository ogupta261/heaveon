import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span className="nav-link" aria-current="page" >Meet the Founders</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" >Contact us</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
