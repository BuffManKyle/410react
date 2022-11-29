import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/polish.css";
import Porschehood from './assets/images/278448480_541985210778527_8092779610297481546_n.jpg'
import Kiahood from './assets/images/299232519_622498806060500_6158025831402718383_n.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';

function Multi () {

    const [showMore, setShowMore] = useState(false);

    const text1 = "The crème de la crop of services.  After a two-bucket hand wash and environmental contaminants removed, a combination of compounds, polishes, and various DA and rotary polisher pads (wool, microfiber, and foam) are utilized to remove 90-95% of swirl marks, scratches, and blemishes.  This process is the most time consuming as vehicles have different paint consistencies, clearcoat hardness, and defects to remove.  Once the paint is brought back to life, it is then coated with a hybrid ceramic liquid wax, offering up to nine (9) months of high gloss shine, deep color, and hydrophobic properties.  Wheels, tires, and wheel wells are cleaned and a gel tire shine applied to retain tire sheen with no tire sling."
    const text2 = "The best protection for a multistage paint correction is a coating.  Let us know your needs and we can get you setup with the appropriate package!"

    return (
        <>
            <div class="jumbotron ">
                <div class="container">
                <h1 class="display-3 oneStageTitle">Multi-Stage Paint Correction</h1>
                <div className="oneStageContent">
                    <div className="hide-on-mobile">
                        <p>          
                            {text1}    
                        </p>
                        <p>
                            {text2}
                        </p>  
                    </div>
                    <div className="hide-on-desktop">
                        <p>
                            {showMore ? text1 : `${text1.substring(0, 250)}`}
                        </p>
                        <p>
                        {showMore ? text2 : `${text2.substring(0, 0)}`}
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
                        src={Porschehood}
                        alt="Porsche hood"/>
                    </Col>
                    <Col lg={6}  >
                        <img className="oneStageImg d-block"
                        src={Kiahood}
                        alt="Kia Hood"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Multi;