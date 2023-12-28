import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
    <style>{`
      #nav {
        box-shadow:0px 15px 15px -3px rgba(0,0,0,0.1) !important;
      }
    `}
    </style>
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 py-4" id="nav">
      <div className="container-fluid">
        <a className="navbar-brand px-4" href="https://shivv004.github.io/my_portfolio"><h4>{props.title}</h4></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
            </li>
            <li className="nav-item dropdown px-3">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/shiv-shankar04/" target="_blank" rel="noreferrer">Linkedin</a></li>
                <li><a className="dropdown-item" href="https://twitter.com/shivv_004" target="_blank" rel="noreferrer">Twitter</a></li>
              </ul>
            </li>
          </ul>
          <div className="git px-4"><a href="https://github.com/shivv004" target="_blank" rel="noreferrer"><button className="btn btn-secondary">GitHub</button></a></div>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Title"
}
