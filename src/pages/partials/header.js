import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
import React, { useState, useEffect } from "react";
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Nav, Navbar, Offcanvas, Col, Row, NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Brandimg from './images/transparent_watermark_smaller_crop.png';



function Header() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <>
          
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className={scrolled ? 'scrolled' : ''} sticky="top" >
            <Container className="">
                <button className="navbars-icon" onClick={toggleOffCanvas}><FontAwesomeIcon icon={faBars}  /></button>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="top"
                show={show}
                onHide={toggleOffCanvas}
                className="Offcanvas-background"
                
                
              >
                
                <Offcanvas.Header className="Navbar-Offcanvas-Blur lineup-nav" >
                    <Container className="p-3">
                      <Row>
                        <Col>
                        <button className="navx-icon" onClick={toggleOffCanvas}><FontAwesomeIcon icon={faXmark} /></button>
                        </Col>
                        <Col md={12} className="brandLogoInside">
                        <a  href="/"><img className="brandNavLogoInside" src={Brandimg} alt="logo"/></a>
                        </Col>
                      </Row>
                      </Container>
                </Offcanvas.Header>
                <Offcanvas.Body className="Navbar-Offcanvas-Blur">
                  <Nav className="text-center navOptions pe-3">

                  <LinkContainer to="/">
                    <Nav.Link onClick={toggleOffCanvas}>Home</Nav.Link>
                  </LinkContainer>

                  <NavDropdown title="Protective Coatings" >
                    <Container className="text-center">

                      <LinkContainer to="/coatingpackages">
                        <Nav.Link  onClick={toggleOffCanvas}>
                          Coating Packages
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/undrdogcoating">
                        <Nav.Link  onClick={toggleOffCanvas}>
                          Protective Coating Options
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/supplementalcoatings">
                        <Nav.Link  onClick={toggleOffCanvas}>
                          Supplemental Coating Options
                        </Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/what-is-a-protective-coating">
                        <Nav.Link  onClick={toggleOffCanvas}>
                          Coatings Explained
                        </Nav.Link>
                      </LinkContainer>
                    </Container>
                  </NavDropdown>

                  
                  

                  <LinkContainer to="/paintcorrection">
                    <Nav.Link  onClick={toggleOffCanvas}> Paint Correction</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/add-ons">
                    <Nav.Link  onClick={toggleOffCanvas}> Add-on Services</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/carwashkit">
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