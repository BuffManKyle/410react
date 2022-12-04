import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'
import { Col, Button, Row, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <>
        <div className="footerWrapper">
           <Container >
                
                 <Row className="text-center">
                    <Col lg="4">
                        <h4>Where do we service?</h4>
                        <p>Servicing Kent Island and surrounding areas</p>
                        
                        
                    </Col>
                    <Col lg="4">
                        <Button size="lg">Book Now</Button>
                        
                    </Col>

                    <Col lg="4" className="socialCol">
                        <h4>Follow Us Today!</h4>
                        <a className="socialsFooter" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fouroneo_detailing/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="socialsFooter" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/fouroneodetailing"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="socialsFooter" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCegEH4dBaFvcHwW0CtRdyZA?view_as=subscriber"><FontAwesomeIcon icon={faYoutube} /></a>
                        
                    </Col>
                 </Row>
                 <Row className=" text-center">
                    <Col lg={{ span: 4, offset: 0 }} className="footerInfo">
                        <p><strong>Phone:</strong> 240-215-7071</p>
                        <p><strong>Email:</strong> fouroneodetailing@gmail.com</p>
                    </Col>
                    <Col lg={{ span: 4, offset: 4 }} className="footerInfo">
                        <p>Copyright?</p>
                        <p>Designed by Kyle Katzenmaier</p>
                    </Col>
                    
                 </Row>
           </Container>

           
        </div>
        </>
    )
};

export default Footer;