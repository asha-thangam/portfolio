import React from "react";
import logo from "../images/logo.jpg"
import "./Navbar.css"
export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} style={{height:'50px'}}></img></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#main-container" data-toggle="popover">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about-me" data-toggle="popover">About Me</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills" data-toggle="popover">Skills</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href='#proj' data-toggle="popover">Projects</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href='#maincontact' data-toggle="popover">Contact</a>
              </li>

            </ul>
          </div>
        </div>
</nav>
    </header>
  );
}