import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
import React, { useState } from "react";
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
          <Navbar key={expand} expand={expand} className="" fixed="top">
            <Container fluid>
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
                    <Container fluid>
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

                  <Nav.Link to="/" onClick={toggleOffCanvas}>Home</Nav.Link>

                  <NavDropdown title="Protective Coatings" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <Container className="text-center">
                    <NavDropdown.Item to="#action/3.1" onClick={toggleOffCanvas}>
                      Coating Packages
                    </NavDropdown.Item>
                    <NavDropdown.Item to="#action/3.2" onClick={toggleOffCanvas}>
                      Supplemental Coating Options
                    </NavDropdown.Item>
                    <NavDropdown.Item to="#action/3.3" onClick={toggleOffCanvas}>
                      Coatings Explained
                    </NavDropdown.Item>
                    </Container>
                  </NavDropdown>

                  <NavDropdown title="Paint Correction" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <Container className="text-center">
                    <NavDropdown.Item to="#action/3.1" onClick={toggleOffCanvas}>
                      All-in-One Polish
                    </NavDropdown.Item>
                    <NavDropdown.Item to="#action/3.2" onClick={toggleOffCanvas}>
                      One Stage Paint Correction
                    </NavDropdown.Item>
                    <NavDropdown.Item to="#action/3.3" onClick={toggleOffCanvas}>
                      Multistage Paint Correction
                    </NavDropdown.Item>
                    </Container>
                  </NavDropdown>

                  <Nav.Link to="/" onClick={toggleOffCanvas}> Add-on Services</Nav.Link>
                  <Nav.Link to="/" onClick={toggleOffCanvas}> Car Wash Kits</Nav.Link>
                  <Nav.Link to="/" onClick={toggleOffCanvas}> Correction & Coatings FAQs</Nav.Link>
                  <Nav.Link to="/" onClick={toggleOffCanvas}> About Us</Nav.Link>

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