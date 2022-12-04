import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/pages.css";
import { Col, Container, Row } from 'react-bootstrap';
import Waterbead from './assets/images/water-bead.jpg';

function Explain () {
    return (
        <>
            <Container fluid>
                    <Row >
                        <Col lg={7} className="paddingZero">
                            <div class="jumbotron ">
                                <div class="">
                                    <h1 class="display-4 pagesTitle">What is an "automotive protective coating"?</h1>
                                    <div className="pagesTitleContent">

                                        <p>
                                            Long gone are the days of waxing your vehicle by hand for only a couple weeks worth of protective.  
                                            Automotive protective coatings are the new wave of ultimate vehicle protection.  
                                            Here at Four One O', we utilize a PTFE or Teflon based coating that provides years of unparalleled protection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} className="imgBorderRight">
                            <Row>
                            <img className="" src={Waterbead} alt="Water beading up" />
                            </Row>
                        </Col>
                    </Row>
            
                    <Row className="pageContentCentered">
                        <Col  sm={12} lg={6} className="p-5">
                            <h1 class="display-6 pagesTitleAlt">Resistance to environmental contaminates such as:</h1>
                            <div className="pagesTitleContentAlt">
                                <ul>
                                    <li>brake dust </li>
                                    <li>iron particulates</li>
                                    <li>bird droppings</li>
                                    <li>bug splatter</li>
                                    <li>acidic rain</li>
                                </ul>
                                </div>
                             </Col>
                             <Col  sm={12} lg={6} className="p-5 ">
                                <h1 class="display-6 pagesTitleAlt">Other notable qualities:</h1>
                                <div className="pagesTitleContentAlt">
                                <ul>
                                    <li>UV protection built in to help your paint resist fading and looking dull over time. </li>
                                    <li>Vehicles stay cleaner, longer</li>
                                    <li>Intense hydrophobic properties</li>
                                    <li>Reduction in amount of time it takes to clean the vehicle</li>
                                </ul>
                                </div>
                            
                        </Col>
                    </Row>
                
                
            </Container>
        </>
    )
};

export default Explain;