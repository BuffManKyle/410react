import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import { Container, Col, Row } from 'react-bootstrap';
import Aboutimg from './partials/images/aboutimg.jpg';

function About () {


    return (
        <>
            <Container fluid>
                <Row className="text-center page-header">
                    <Col>
                        <h2>About Us</h2>
                    </Col>
                </Row>
                <Row className="content-spacing">
                    <Col lg={{ span: 5, offset: 1 }}>
                        <img src={Aboutimg} className="d-block w-75 aboutimg"/>
                    </Col>
                    <Col lg={{ span: 5, offset: 0 }} className="content-block p-3" >
                        <h5>Four One O' Detailing is a professional mobile and on-site shop vehicle detailing service created in March of 2020. Born from a love of all things automotive, I strive to deliver an extraordinary detailing experience that meets all of my customers' expectations. The same attention to detail I put into conducting a paint correction and coating is the same focus I apply to customer communication and honest expectations. Family values, hard work, and dedication drive the vision I set forth to create a vehicle detailing service that offers honest prices and superb results.
                            - Cody, Owner  
                        </h5>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default About;