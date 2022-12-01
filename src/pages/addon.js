import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import { Col, Container, Row } from 'react-bootstrap';
import Enginebay1 from './assets/images/124023676_195923485384703_2827393070077516327_n.jpg';

function Addons () {
    return (
        <>
            <Container fluid >
                <Row >
                    <Col lg={7} className="paddingZero">
                        <div class="jumbotron">
                            <h1 class="display-3 pagesTitle">Engine Bay Detailing</h1>
                            <div className="pagesTitleContent">

                                <p>
                                    “Waterless” scrubbing and degreasing using a variety of solutions safe for your engine, plastics, and moldings.  A plastic/rubber protectant spray is then applied to produce a nice, matte finish.
                                </p>

                                <p>
                                    For serious degreasing, off-road vehicles, and engine bays that need extra detailing, add $35.
                                </p>

                                <p>
                                    Cost:  $100 small vehicles, $150 large vehicles
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} className="addonBorder">
                        <Row className="d-flex justify-content-evenly">
                            <img className="bayImg" src={Enginebay1} alt="" />
                        </Row>
                        
                        
                        
                    </Col>
                </Row>

                <Row className="pageContentCentered">
                    <Col lg={{ span: 6, offset: 3 }} className="p-5 ">
                        <h1 class="display-3 pagesTitleAlt">Undercarriage Detail</h1>
                        <div className="pagesTitleContentAlt">
                           <p>
                            Frame rails, differentials/axles, most suspension components, etc. are deep cleaned with a variety of cleaners and degreasers.  Due to height limitations to perform the job effectively, this product is mainly geared towards SUVs and trucks.  Other vehicles will be taken on a case by case basis depending on circumstances.
                            </p>

                            <p>
                                For serious degreasing, excessive debris removal, off-road vehicles, and undercarriages that need extra detailing, add $100.
                            </p>

                            <p>
                                Cost: $200 (smaller vehicles will be priced accordingly on a case by case basis) 
                            </p> 
                        </div>

                        
                    </Col>
                </Row>


                    
                
            </Container>
        </>
    )
};

export default Addons;