import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import Videobackground from './assets/videos/videoportrait02.mp4'
import Brandimg from './partials/images/transparent_watermark.png'
import { Col, Button, Row, Container} from 'react-bootstrap';
import Mycarousel from "./carousel";





function Home () {
    return (
    <>
        <Container fluid className="homeTop">
            <div className=" text-center homeContent">
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <h3>
                            Here at Four One O' Detailing, we have created a brand that is more than your average vehicle detailing company.
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <p>
                            Utilizing premium products and years of expertise, we continue to deliver unparalleled results when it comes to paint correction and protective coatings.
                        </p>
                    </Col>
                </Row>
                <Button>Click for penis</Button>
            </div>
        </Container>
        
        
        
        <Container fluid className="homeBottom">
            <div className="text-center homeContact">
                <Row>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <p>Words here like "fat cocks"</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <Mycarousel/>
                    </Col>
                    <Col lg={5} className="p-3">
                    <h4>A professional mobile and static location auto detailing brand servicing the Annapolis/Kent Island, MD and surrounding areas since March 2020.</h4>
                    </Col>
                    
                </Row>
            </div>
        </Container>
    
    <div className="">
        <div className=""></div>
            <video src={Videobackground} autoplay="autoplay" loop="true" muted className="videoPlayer" preload="" poster={Brandimg}>
            </video>
        
    </div>
    
    </>
    )
};

export default Home;