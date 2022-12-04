import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/pages.css";
import "./styles.css"
import { Container, Col, Row } from 'react-bootstrap';
import Contactform from "./partials/contactform";



function About () {


    return (
        <>  
            <Container fluid className="aboutusSpacing">

            <Row >
                <Col lg={7} className="paddingZero">
                    <div class="jumbotron ">
                        <div class="container">
                            <h1 class="display-3 pagesTitle">About Us</h1>
                            <div className="pagesTitleContent">
                            <p>
                                Four One O' Detailing is a professional mobile and on-site shop vehicle detailing service created in March of 2020.  
                                Born from a love of all things automotive, I strive to deliver an extraordinary detailing experience that meets all of my customers' 
                                expectations.  The same attention to detail I put into conducting a paint correction and coating is the same focus 
                                I apply to customer communication and honest expectations.  Family values, hard work, and dedication drive the vision 
                                I set forth to create a vehicle detailing service that offers honest prices and superb results.
                            </p>
                            <h2 class="text-end">- Cody, Owner</h2>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5} className="pageBorder">
                    <h1 className="display-4 text-center">Contact Us Today!</h1>
                    <div className="formAltBackground">
                        <Contactform/>
                    </div>
                    
                </Col>
            </Row>
                
                

                
            </Container>
            
            
            
        </>
    )
};

export default About;