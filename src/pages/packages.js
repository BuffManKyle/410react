import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/pages.css";
import Contactform from "./partials/contactform";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Mustangsoap from './assets/images/281389973_561511532159228_5300915891771810873_n.jpg';
import Porscheheadlight from './assets/images/317477836_683892203241326_3489825842956859716_n.jpg';
import Mustangclassic from './assets/images/286075321_575273730783008_7454838259716607200_n.jpg';
import GMChood from './assets/images/313172293_659057639058116_6762523635466166363_n.jpg';

function Packages () {

    return (
        <>
            
            <Container fluid className="suplementalSpacing">
                <div className="formAltBackground">
                    <h1 class="display-3 pagesTitle">Get a Price Quote</h1>
                    <Contactform/>
                </div>
                <div className="hide-on-mobile">
                    <Card className="cardChange cPC" >
                        <div className="card-horizontal">
                            <Card.Body>
                              <Card.Title className="display-4">Wash & Coat</Card.Title>  
                                <Row className="cardContent">
                                    <Col>
                                        
                                        <p >Your vehicle is given a foam soak, 
                                            two-bucket wash followed up with all 
                                            necessary decontamination procedures.  
                                            The subsequent result is a coating of your 
                                            choice on all paint, trim, headlights, and taillights. 
                                            (no paint correction in this package)</p>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Lite</h2>
                                                <p> <strong>Durability:</strong> Up to 2 Years</p>
                                                <p><strong>Cost:</strong> $599/small vehicle $799/large vehicle</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Pro</h2>
                                                <p> <strong>Durability:</strong> Up to 5 Years</p>
                                                <p><strong>Cost:</strong> $699/small vehicle $899/large vehicle</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Img className="cardCPImg"  src={Mustangsoap} />
                        </div>
                    </Card>

                    <Card className="cardChange cPC" >
                        <div className="card-horizontal">
                            <Card.Img className="cardCPImg"  src={Porscheheadlight} />
                            <Card.Body>
                              <Card.Title className="display-4">Paint Enhancement & Coat</Card.Title>  
                                <Row className="cardContent">
                                    <Col>
                                        
                                        <p >Your vehicle is given a foam soak, two-bucket wash followed 
                                            up with all necessary decontamination procedures.  The vehicle 
                                            is then lightly polished to bring shine and gloss back to the vehicle.  
                                            There is a minimal amount of swirl/scratch reduction.  
                                            It is then coated with a coating of your choice on all 
                                            paint, trim, headlights, and taillights. </p>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Lite</h2>
                                                <p> <strong>Durability:</strong> Up to 2 Years</p>
                                                <p><strong>Cost:</strong> $699/small vehicle $899/large vehicle</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Pro</h2>
                                                <p> <strong>Durability:</strong> Up to 5 Years</p>
                                                <p><strong>Cost:</strong> $799/small vehicle $999/large vehicle</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </div>
                    </Card>

                    <Card className="cardChange cPC" >
                        <div className="card-horizontal">
                            <Card.Body>
                              <Card.Title className="display-4">One Step Correction & Coat</Card.Title>  
                                <Row className="cardContent">
                                    <Col>
                                        
                                        <p >Your vehicle is given a foam soak, two-bucket wash followed up with all necessary decontamination procedures.  
                                            The vehicle is then given a one stage correcting polish that removes up to 75% of paint defects.  
                                            The result is mostly clear paint, a brilliant shine, and deep gloss.  
                                            The vehicle is then coated in your choice of coating on all paint, trim, headlights, and taillights. </p>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Lite</h2>
                                                <p> <strong>Durability:</strong> Up to 2 Years</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Pro</h2>
                                                <p> <strong>Durability:</strong> Up to 5 Years</p>
                                                
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Img className="cardCPImg"  src={Mustangclassic} />
                        </div>
                    </Card>

                    <Card className="cardChange cPC" >
                        <div className="card-horizontal">
                            <Card.Img className="cardCPImg"  src={GMChood} />
                            <Card.Body>
                              <Card.Title className="display-4">Multistage Correction & Coat</Card.Title>  
                                <Row className="cardContent">
                                    <Col>
                                        
                                        <p >Your vehicle is given a foam soak, two-bucket wash followed up with 
                                            all necessary decontamination procedures.  
                                            The vehicle then undergoes a multistep corrective 
                                            process utilizing heavy cut, medium cut, and fine polishing 
                                            procedures to produce immaculate results with up to a 95% perfection rate.  
                                            A coating of your choice is then applied on all paint, trim, headlights, and taillights.</p>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Lite</h2>
                                                <p> <strong>Durability:</strong> Up to 2 Years</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h2 className="">Undrdog Pro</h2>
                                                <p> <strong>Durability:</strong> Up to 5 Years</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </div>
                    </Card>
                </div>




                <div className="hide-on-desktop">
                    <Card className="cardChange cPC" >
                        <Card.Body>
                          <Card.Title className="display-4">Wash & Coat</Card.Title>  
                            <Row className="cardContent">
                                <Col>
                                    
                                    <p >Your vehicle is given a foam soak, 
                                        two-bucket wash followed up with all 
                                        necessary decontamination procedures.  
                                        The subsequent result is a coating of your 
                                        choice on all paint, trim, headlights, and taillights. 
                                        (no paint correction in this package)</p>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Lite</h2>
                                            <p> <strong>Durability:</strong> Up to 2 Years</p>
                                            <p><strong>Cost:</strong> $599/small vehicle $799/large vehicle</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Pro</h2>
                                            <p> <strong>Durability:</strong> Up to 5 Years</p>
                                            <p><strong>Cost:</strong> $699/small vehicle $899/large vehicle</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Img className=""  src={Mustangsoap} />
                    </Card>

                    <Card className="cardChange cPC" >
                        <Card.Body>
                          <Card.Title className="display-4">Paint Enhancement & Coat</Card.Title>  
                            <Row className="cardContent">
                                <Col>
                                    
                                    <p >Your vehicle is given a foam soak, two-bucket wash followed 
                                        up with all necessary decontamination procedures.  The vehicle 
                                        is then lightly polished to bring shine and gloss back to the vehicle.  
                                        There is a minimal amount of swirl/scratch reduction.  
                                        It is then coated with a coating of your choice on all 
                                        paint, trim, headlights, and taillights. </p>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Lite</h2>
                                            <p> <strong>Durability:</strong> Up to 2 Years</p>
                                            <p><strong>Cost:</strong> $699/small vehicle $899/large vehicle</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Pro</h2>
                                            <p> <strong>Durability:</strong> Up to 5 Years</p>
                                            <p><strong>Cost:</strong> $799/small vehicle $999/large vehicle</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Img className=""  src={Porscheheadlight} />
                    </Card>

                    <Card className="cardChange cPC" >
                        <Card.Body>
                          <Card.Title className="display-4">One Step Correction & Coat</Card.Title>  
                            <Row className="cardContent">
                                <Col>
                                    <p >Your vehicle is given a foam soak, two-bucket wash followed up with all necessary decontamination procedures.  
                                        The vehicle is then given a one stage correcting polish that removes up to 75% of paint defects.  
                                        The result is mostly clear paint, a brilliant shine, and deep gloss.  
                                        The vehicle is then coated in your choice of coating on all paint, trim, headlights, and taillights. </p>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Lite</h2>
                                            <p> <strong>Durability:</strong> Up to 2 Years</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Pro</h2>
                                            <p> <strong>Durability:</strong> Up to 5 Years</p>
                                            
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Img className=""  src={Mustangclassic} />
                    </Card>

                    <Card className="cardChange cPC" >
                        <Card.Body>
                          <Card.Title className="display-4">Multistage Correction & Coat</Card.Title>  
                            <Row className="cardContent">
                                <Col>
                                    <p >Your vehicle is given a foam soak, two-bucket wash followed up with 
                                        all necessary decontamination procedures.  
                                        The vehicle then undergoes a multistep corrective 
                                        process utilizing heavy cut, medium cut, and fine polishing 
                                        procedures to produce immaculate results with up to a 95% perfection rate.  
                                        A coating of your choice is then applied on all paint, trim, headlights, and taillights.</p>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Lite</h2>
                                            <p> <strong>Durability:</strong> Up to 2 Years</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h2 className="">Undrdog Pro</h2>
                                            <p> <strong>Durability:</strong> Up to 5 Years</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Img className=""  src={GMChood} />
                    </Card>
                </div>

                <Row className="cardChange p-3 cardContent addonCP">
                        <h1 className="text-center display-5 ">Add-Ons</h1>
                        <Col>
                            <h3 className="text-center">Windshield/Glass</h3>
                            <p>
                                Want the same great hydrophobics and protection on your glass as what's on 
                                the rest of your car?  The coating may be applied to all glass surfaces 
                                (up to 1 year of protection on this substrate) for the additional prices of:
                                <ul>
                                    <li>Windshield: $100</li>
                                    <li>All Glass: $200</li>
                                </ul>
                            </p>
                            <h3 className="text-center">Wheels</h3>
                            <p>
                                The coating may be applied to your wheels as well (up to 1 year of protection).  
                                While performing the aforementioned bonuses, coated wheels also help resist 
                                brake dust from damaging your wheels.  Self-cleaning and ease of cleaning 
                                properties included!
                                <ul>
                                    <li>Wheel Faces: $100</li>
                                    <li>Wheels Off Service: $200
                                        <ul>
                                            <li>Wheels off refers to the vehicle being 
                                                lifted and the wheels physically removed from the vehicle.  
                                                This allows a deeper clean and coating of the face, barrel, and back of the wheels.
                                                </li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </Col>
                        <Col>
                            <h3 className="text-center">Trim Restoration</h3>
                            <p>
                                Faded, dull plastic trim is  permanently restored with a dye to produce an OEM, factory finish.  
                                Subsequent re-dyed trim is then coated to preserve the finish.
                                <ul>
                                    <li>
                                        Starting price: $100 
                                        <ul>
                                            <li>Price is subject to change based on the vehicle and amount of trim to be restore</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                            <h3 className="text-center">Convertible Top Protective Coating (soft top)</h3>
                            <p>
                                Convertible tops require protection too.  Protect against UV 
                                damage and fade, environmental contaminates staining the 
                                substrate, and create intense hydrophobic properties with a 
                                convertible soft top coating..
                                <ul>
                                    <li>Starting price: $100
                                        <ul>
                                            <li>Price is subject to change based on the vehicle and size of convertible top</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </Col>
                </Row>
            </Container>
        </>
    )
};

export default Packages;