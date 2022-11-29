import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/polish.css";
import Toyotarear from './assets/images/279061592_545617847081930_2617669926475089209_n.jpg'
import Toyotaront from './assets/images/283462480_566477151662666_9157612857353234056_n.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';

function Aio () {
    
    const [showMore, setShowMore] = useState(false);

    const text = "A shower foam hand wash using a two-bucket method begins this service.  During the washing process, an iron fallout remover is applied to the vehicle to strip molecular level contaminates from the paint’s clearcoat.  A clay bar process is then applied to the vehicle to finish the removal of environmental fallout and contaminates from the paint to prep it for polishing.  An all-in-one (AIO) polish and sealant is then machine applied to your vehicle to remove light scratches, light swirl marks, and most water spots (50-65% of these marks) that is then simultaneously sealed up by the product.  The seal is then “boosted” by a hydrophobic sealant for an extra layer of protection for up to four (4) months of protection. Wheels, tires, and wheel wells are cleaned and a gel tire shine applied to retain tire sheen with no tire sling."

    return (
        <>
            <div class="jumbotron ">
                <div class="container">
                <h1 class="display-3 oneStageTitle">All-in-One Polish</h1>
                <div className="oneStageContent">
                <div className="hide-on-mobile">
                        <p>          
                            {text}    
                        </p> 
                    </div>
                    <div className="hide-on-desktop">
                        <p>
                            {showMore ? text : `${text.substring(0, 250)}`}
                        </p>
                        <Button className="showmorebtn" onClick={() => setShowMore(!showMore)}>
                            {showMore ? "Show less" : "Show more"}
                        </Button>
                    </div>
                </div>
                    <Button size="lg">Book Now</Button>
                </div>
            </div>
            <Container fluid >
                <Row className="oneStageImgWrapper">
                    <Col lg={6}  >
                        <img className="oneStageImg d-block"
                        src={Toyotarear}
                        alt="Toyota xse rear"/>
                    </Col>
                    <Col lg={6}  >
                        <img className="oneStageImg d-block"
                        src={Toyotaront}
                        alt="Toyota Tundra front"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Aio;