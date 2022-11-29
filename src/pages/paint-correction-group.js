import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import Single from './single';
import Multi from './multi';
import Aio from './aio';
import { Link } from 'react-scroll';
import { Button, Col, Container, Row } from 'react-bootstrap';


function Paintcorrectionpage () {

    
    const offsetValue = -170;

    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col>
                        <Link to="single" spy={true} smooth={true} duration={100} offset={offsetValue}><Button className="scrollbtn" size="lg">One Stage</Button></Link>
                        <Link to="multi" spy={true} smooth={true} duration={100} offset={offsetValue}><Button className="scrollbtn" size="lg">Multistage</Button></Link>
                        <Link to="aio" spy={true} smooth={true} duration={100} offset={offsetValue}><Button className="scrollbtn" size="lg">All-in-one</Button></Link>
                    </Col>  
                </Row>
            </Container>
            <div id='single'>
                <Single/>
            </div>
            <div id='multi'>
                <Multi/>
            </div>
            <div id='aio'>
                <Aio/>
            </div>
        
        </>
    );

}

export default Paintcorrectionpage;