import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import Videobackground from './assets/videos/videoportrait02.mp4'
import Backgroundimg from './partials/images/car3.webp'
import { Col, Button, Row, Container} from 'react-bootstrap';
import Mycarousel from "./partials/carousel";
import Contactform from "./partials/contactform";





function Home () {
    return (
    <>
        <Container fluid className="homeTop">
            <div className=" text-center homeContent">
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <h1>
                            A brand that is more than your average vehicle detailing company.
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <p>
                            Utilizing premium products and years of expertise, we continue to deliver unparalleled results when it comes to paint correction and protective coatings.
                        </p>
                    </Col>
                </Row>
                <Button size="lg">Click for coating</Button>
            </div>
        </Container>
        
        
        
        <Container fluid className="homeBottom">
            <div className="text-center homeContact">
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <Mycarousel/>
                    </Col>
                    <Col lg={5} className="p-3">
                        <h4>A professional mobile and static location auto detailing brand servicing the Annapolis/Kent Island, MD and surrounding areas since March 2020.</h4>
                        <Contactform/>
                    </Col>
                    
                </Row>
            </div>
            <Container className="HRwrapper">
                <div className="HR"></div>
            </Container>
        </Container>
    
    <div className="">
        <div className=""></div>
            <video src={Videobackground} autoplay="autoplay" loop="true" muted className="videoPlayer" preload="auto" poster={Backgroundimg} playsInline>
            </video>
        
    </div>
    
    </>
    )
};

export default Home;