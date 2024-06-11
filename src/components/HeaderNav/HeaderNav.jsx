import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.png';

const HeaderNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="headernav px-4">
      <Navbar.Brand href="/" className="headernav-logo-container d-flex align-items-center me-3">
        <img src={logo} alt="Logo" className="headernav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="headernav-links-container">
          <Nav.Link href="#/about">About</Nav.Link>
          <Nav.Link href="#/approach">Approach</Nav.Link>
          <Nav.Link href="#/projects">Projects</Nav.Link>
          {/* <Nav.Link href="#/collaborators">Collaborators</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
