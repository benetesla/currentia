/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top  navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Curren<span className="text-white">tia</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page">
                  <Link to="/" className="text-white link">
                    Home <i className="fas fa-bolt"></i>
                  </Link>

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <Link to="/History" className="text-white  link">
                    A Faisca   <i className="fas fa-bolt"></i>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  <Link to="/Cards" className="text-white  link">
                    Timeline <i className="fas fa-bolt"></i>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar