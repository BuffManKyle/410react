import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
import React, { useState } from "react";
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Nav, Navbar, Offcanvas, Col, Row, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Brandimg from './images/transparent_watermark.png';


function Header() {

    const [show, setShow] = useState(false);

    const toggleOffCanvas = () => {
    setShow((show) => !show);
    };



    return (
      <>

        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="" sticky="top">
            <Container >
                <button className="navbars-icon" onClick={toggleOffCanvas}><FontAwesomeIcon icon={faBars} /></button>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="top"
                show={show}
                onHide={toggleOffCanvas}
                className="Offcanvas-background"
                
                
              >
                
                <Offcanvas.Header className="Navbar-Offcanvas-Blur lineup-nav">
                    <Container>
                      <Row>
                        <Col>
                        <button className="navx-icon" onClick={toggleOffCanvas}><FontAwesomeIcon icon={faXmark} /></button>
                        </Col>
                        <Col md={12} className="brandLogoInside">
                        <a  href="/"><img className="brandNavLogo" src={Brandimg} alt="logo"/></a>
                        </Col>
                      </Row>
                      </Container>
                </Offcanvas.Header>
                <Offcanvas.Body className="Navbar-Offcanvas-Blur">
                  <Nav className="text-center navOptions pe-3">

                  <LinkContainer to="/">
                    <Nav.Link onClick={toggleOffCanvas}>Home</Nav.Link>
                  </LinkContainer>

                  <NavDropdown title="Protective Coatings" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <Container className="text-center">

                      <LinkContainer to="/coatingpackages">
                        <NavDropdown.Item  onClick={toggleOffCanvas}>
                          Coating Packages
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/supplementalcoatings">
                        <NavDropdown.Item  onClick={toggleOffCanvas}>
                          Supplemental Coating Options
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/what-is-a-protective-coating">
                        <NavDropdown.Item  onClick={toggleOffCanvas}>
                          Coatings Explained
                        </NavDropdown.Item>
                      </LinkContainer>
                    </Container>
                  </NavDropdown>

                  <NavDropdown title="Paint Correction" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <Container className="text-center">

                    <LinkContainer to="/aio-polish">
                      <NavDropdown.Item  onClick={toggleOffCanvas}>
                        All-in-One Polish
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/one-stage">
                      <NavDropdown.Item  onClick={toggleOffCanvas}>
                        One Stage Paint Correction
                      </NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/multistage">
                      <NavDropdown.Item  onClick={toggleOffCanvas}>
                        Multistage Paint Correction
                      </NavDropdown.Item>
                    </LinkContainer>
                    </Container>
                  </NavDropdown>

                  <LinkContainer to="/add-ons">
                    <Nav.Link  onClick={toggleOffCanvas}> Add-on Services</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/carwarshkit">
                    <Nav.Link  onClick={toggleOffCanvas}> Car Wash Kits</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/paint-correction-faqs">
                    <Nav.Link  onClick={toggleOffCanvas}> Correction & Coatings FAQs</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about-us">
                    <Nav.Link onClick={toggleOffCanvas}> About Us</Nav.Link>
                  </LinkContainer>

                  <hr></hr>
                  
                  <Row className="justify-content-md-center">
                    <Col xs lg="auto">
                      <a className="socialsOffcanvas" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fouroneo_detailing/"><FontAwesomeIcon icon={faInstagram} /></a>
                    </Col>
                    <Col xs lg="auto">
                      <a className="socialsOffcanvas" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fouroneodetailing"><FontAwesomeIcon icon={faFacebook} /></a>
                    </Col>
                    <Col xs lg="auto">
                      <a className="socialsOffcanvas" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCegEH4dBaFvcHwW0CtRdyZA?view_as=subscriber"><FontAwesomeIcon icon={faYoutube} /></a>
                    </Col>
                  </Row>
                     
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Col className="brandLogoInside">
                <a href="/"><img className="brandNavLogo" src={Brandimg} alt="logo"/></a>
              </Col>
              
              
            </Container>
          </Navbar>
        ))}
      </>
    );
}

export default Header;