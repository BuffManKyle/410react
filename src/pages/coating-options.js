import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/pages.css";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Undrdoglite from './assets/images/undrdog-lite.webp';
import Undrdogpro from './assets/images/undrdog-pro.webp'



function Coatingoptions () {

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }

    const [showMore, setShowMore] = useState(false);

    const text1 = "PTFE or Teflon is considered old tech, however the folks at Undrdog have created a new formulation of the chemicals that have been blowing traditional ceramic and graphene coatings out of the water in terms of performance and protection.  For a no fuss, no fluff coating that offers excellent protection, we introduce Undrdog Coating (Lite) and Undrdog Pro.  Compared to ceramic and graphene coatings, this coating stays cleaner longer, clogs less frequently, and offers the same protection as any traditional ceramic or graphene coating for up to either 2 or 5 years. For coating pricing, click the button below to open a downloadable PDF file. It is highly suggested that coatings receive either a one stage or multistage correction."

    return (
        <>
            
                <div class="jumbotron">
                <ScrollToTopOnMount />
                    <div class="container">
                    <h1 class="display-3 pagesTitle">Coating Options</h1>
                    <div className="pagesTitleContent">
                        <div className="hide-on-mobile">
                            <p>          
                                {text1}    
                            </p>
                        </div>
                        <div className="hide-on-desktop">
                            <p>
                                {showMore ? text1 : `${text1.substring(0, 250)}`}
                            </p>
                            
                            <Button className="showmorebtn btn" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Show less" : "Show more"}
                            </Button>
                        </div>
                    </div>
                        <Button className="btn" size="lg">Book Now</Button>
                    </div>
                </div>
            
                <Container fluid className="suplementalSpacing hide-on-mobile">
                    <Row className="">
                        <Col lg={6}>
                            <Card className="cardChange" >
                                <div className="card-horizontal">
                                    <Card.Img className="cardUDImg"  src={Undrdoglite} />
                                    <Card.Body>
                                        <Card.Title className="display-6">Undrdog Coating (Lite)</Card.Title>
                                        <Row className="cardContent">
                                            <Col>
                                                <strong>Durability</strong>
                                                <p>Up to 2 years</p>
                                            
                                            </Col>
                                            <Col>
                                                <strong>Layers</strong>
                                                <p>1</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <strong>Price</strong>
                                                <p>*Starting at $599 (cost of coating only)</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </div>
                            </Card>
                            </Col>
                            <Col lg={6}>
                            <Card className="cardChange" >
                                <div className="card-horizontal">
                                    <Card.Img className="cardUDImg"  src={Undrdogpro} />
                                    <Card.Body>
                                        <Card.Title className="display-6">Undrdog Pro</Card.Title>
                                        <Row className="cardContent">
                                            <Col>
                                                <strong>Durability</strong>
                                                <p>Up to 5 years</p>
                                            
                                            </Col>
                                            <Col>
                                                <strong>Layers</strong>
                                                <p>1</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <strong>Price</strong>
                                                <p>*Starting at $699 (cost of coating only)</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>

           
                <Container fluid className="suplementalSpacing hide-on-desktop">
                    <Row className="">
                        <Col lg={6}>
                            <Card className="cardChange cardMobile text-center" >
                                    <Card.Img className="" variant="top" src={Undrdoglite} />
                                    <Card.Body>
                                        <Card.Title className="display-6">Undrdog Coating (Lite)</Card.Title>
                                        <Row className="cardContent">
                                            <Col>
                                                <strong>Durability</strong>
                                                <p>Up to 2 years</p>
                                            
                                            </Col>
                                            <Col>
                                                <strong>Layers</strong>
                                                <p>1</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <strong>Price</strong>
                                                <p>*Starting at $599 (cost of coating only)</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>
                            </Col>
                            <Col lg={6}>
                            <Card className="cardChange cardMobile text-center" >
                                    <Card.Img className="" variant="top" src={Undrdogpro} />
                                    <Card.Body>
                                        <Card.Title className="display-6">Undrdog Pro</Card.Title>
                                        <Row className="cardContent">
                                            <Col>
                                                <strong>Durability</strong>
                                                <p>Up to 5 years</p>
                                            
                                            </Col>
                                            <Col>
                                                <strong>Layers</strong>
                                                <p>1</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <strong>Price</strong>
                                                <p>*Starting at $699 (cost of coating only)</p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </>
    )
};

export default Coatingoptions;