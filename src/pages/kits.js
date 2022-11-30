import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./styles/pages.css";
import { Col, Container, Row, Card } from 'react-bootstrap';
import Washkit from './assets/images/wash-kit.jpg';
import Washchemicals from './assets/images/wash-chemicals.jpg';
import Washtowels from './assets/images/wash-towels.jpg';
import Washbuckets from './assets/images/wash-buckets.jpg';

function Kits () {

    return (
        <>
        <Container fluid>
            <Row>
                <Col lg={7} className="paddingZero">
                    <div class="jumbotron ">
                        <div class="container">
                            <h1 class="display-3 pagesTitle">Car Wash Kits</h1>
                            <div className="pagesTitleContent">
                                <p>
                                    Whether you're a DIY person that enjoys cleaning their vehicle or as a holiday gift, Four One O' Detailing Wash Kits offer everything you need to wash and maintain your vehicle.  Derived from premium products we use on a daily basis, these kits deliver the cleaning power and protection capabilities you need to keep your vehicle looking your best.  Top tier microfiber products and wash buckets help reduce the potential for inducing scratching while washing your vehicle.  To top it off, these kits represent over 25% in savings over if they each product was purchased individually.  Savings and quality products, what more could you ask for?!
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5} className="pageBorder">
                        <h2 className="">Included in each kit:</h2>
                        <ul>
                            <li>One Autofiber Dreadnought XL microfiber drying towel</li>
                            <li>One Autofiber Wash Monster microfiber washing pad</li>
                            <li>Two Autofiber Korean Plush 470 GSM edgeless microfiber towels</li>
                            <li>9.5oz of Undrdog Soap (pH neutral, good for up to 5 washes)</li>
                            <li>9.5oz of Undrdog Quick Detail spray sealant</li>
                            <li>9.5oz of a Rinseless Wash (Optimum No Rinse appropriately diluted with distilled water)</li>
                            <li>Two wash buckets with grit guards included</li>
                            <li>Instruction manual with car care tips and the "two bucket" wash method details</li>
                        </ul>

                        <p>Car Wash Kit Cost: $100</p>
                        <p>Contact us today to purchase a kit!</p>
                </Col>
            </Row>
            <Row className="cardBackground">
                <Col lg={3} className="d-flex justify-content-evenly">
                    <Card style={{ width: '90%' }}>
                    <Card.Img variant="top" src={Washkit} />
                    <Card.Body>
                        <Card.Title>Utilizing only premium products, these kits contain everything you need for maintaining your vehicle!</Card.Title>
                        
                    </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} className="d-flex justify-content-evenly">
                    <Card style={{ width: '90%' }}>
                        <Card.Img variant="top" src={Washchemicals} />
                        <Card.Body>
                            <Card.Title>Undrdog Soap, Undrdog Quick Detail (sealant), and a ready-to-use rinseless wash are all you need to keep your vehicle looking fantastic.</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} className="d-flex justify-content-evenly">
                    <Card style={{ width: '90%' }}>
                        <Card.Img variant="top" src={Washtowels} />
                        <Card.Body>
                            <Card.Title>Premium Autofiber microfiber products create a safe washing procedure and excellent results.</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} className="d-flex justify-content-evenly">
                    <Card style={{ width: '90%' }}>
                        <Card.Img variant="top" src={Washbuckets} />
                        <Card.Body>
                            <Card.Title>Two grit guard buckets aid in the reduction of scratch inducing washing.</Card.Title>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
           
        </>
    )
};

export default Kits;