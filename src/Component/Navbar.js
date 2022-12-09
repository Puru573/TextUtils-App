import React from 'react';
import propTypes from 'prop-types';
import Alert from './Alert'
import {Link} from 'react-router-dom';
const Navbar=(props)=>{
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
        </li>
       
      </ul>
      <div className="d-flex">
      <div class={`form-check form-switch text-${props.mode=='dark'?'light':'dark'}`}>
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
        <label class="form-check-label" for="flexSwitchCheckDefault">{props.btn}</label>
</div>
      
      </div>
    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar

Navbar.propTypes={
    title:propTypes.string,
    about:propTypes.string
}

Navbar.defaultProps={
    title:'set title name',
    about:'set text'
}