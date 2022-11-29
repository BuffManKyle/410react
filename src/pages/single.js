import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/polish.css";
import Mercadeshood from './assets/images/314789663_670013071295906_1018968343675313872_n.jpg'
import Porscherear from './assets/images/Attach0.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useState} from 'react';

function Single () {

    const [showMore, setShowMore] = useState(false);

    const text1 = "Shower foam hand wash and a two-bucket method to start. Vehicle is stripped of environmental fallout and contaminants using an iron fallout remover and a hand applied clay bar process completed.  Paint is then polished using a DA polisher and 65-75% of paint defects removed.  Deeper scratches and heavy abrasions will remain, but will be severely less noticeable.  A ceramic wax is then applied to the paint to provide extreme water and UV protection [up to nine (9) month durability].  Wheels, tires, and wheel wells are cleaned and a gel tire shine is applied to retain tire sheen with no tire sling."
    const text2 ="The best protection for a one stage paint correction is a coating.  Let us know your needs and we can get you setup with the appropriate package!"

    return (
        <>
        
            <div class="jumbotron ">
                <div class="container">
                <h1 class="display-3 oneStageTitle">One Stage Paint Correction</h1>
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
                        src={Mercadeshood}
                        alt="Mercades hood"/>
                    </Col>
                    <Col lg={6}  >
                        <img className="oneStageImg d-block"
                        src={Porscherear}
                        alt="Mercades hood"/>
                    </Col>
                </Row>
            </Container>

            

                    
                
                
        </>
    )
};

export default Single;