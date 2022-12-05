import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/pages.css";
import { Container, Card, Row, CardGroup } from 'react-bootstrap';
import { useEffect } from "react";
import Opglass from './assets/images/op-glass.webp';
import Opinterior from './assets/images/op-interior.webp';
import Glassw from './assets/images/glass-windshield.webp';
import Glassa from './assets/images/glass-all.webp';
import Igltrim from './assets/images/igl-trim.webp';
import Iglwheel from './assets/images/igl-wheel.webp';
import Iglhead from './assets/images/igl-headlights.webp';
import Iglleather from './assets/images/igl-leather.webp';
import Iglfabric from './assets/images/igl-fabric.webp';

function Options () {

    function ScrollToTopOnMount() {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
        return null;
      }

    return (
        <>
            <Container fluid className="suplementalSpacing">
            <ScrollToTopOnMount />
                <Row className="justify-content-center">
                    <Container className="supplemental">
                        <h1 className="display-3 pagesTitle">Supplemental Coating Options</h1>
                        <div className="pagesTitleContent">
                            <p>Outside of your vehicle's paint, other surfaces suffer environmental decay over time.  
                                Glass becomes water spotted and etched, trim and headlights fade, wheels become caked 
                                in brake dust and debris.  With these add-on options, your vehicle can be protected from top to bottom!  
                                Click the button below to see a downloadable PDF file for pricing of these options.
                            </p>
                        </div>
                    </Container>
                </Row>
                <Row className="">
                    <CardGroup>
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Opglass} />
                            <Card.Body>
                                <Card.Title className="display-6">Owner's Pride Glass Protection ($100 windshield, $200 all glass)</Card.Title>
                                <Card.Text className="cardContent">
                                    Ceramic coating for your windows and windshield. 
                                    Increase glass strength by up to 30% and improve clarity in poor weather conditions. 
                                    Heavy rain, snow, and sleet will wick away from your windshield allowing you to see 
                                    better and focus on driving safely. Increased glass strength helps aid in crack 
                                    prevention from rocks and road debris
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Opinterior} />
                            <Card.Body>
                                <Card.Title className="display-6">Owner's Pride 7 Year Interior Coating ($400 small vehicle, $500 large vehicle)</Card.Title>
                                <Card.Text className="cardContent">
                                    Protection all of your interior surfaces from spills, grime buildup, and dirt. 
                                    Reduce the need to clean your interior and for those unwanted accidents that happen, 
                                    clean-up is a breeze. Warrantied!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Glassw} />
                            <Card.Body>
                                <Card.Title className="display-6">Glassparency Windshield ($100)</Card.Title>
                                <Card.Text className="cardContent">
                                    Heavy rain, snow, sleet, and all sorts of bad weather can cause issues while driving. Glassparency offers a 3 year durability windshield ceramic coating. A Glassparency coated windshield improves clarity, visibility, reduces the need to use your windshield wipers, and helps prevent unsightly water spots from occurring. 
                                    This application comes with a free shipment of maintenance wipes 
                                    (recommended to be used every 3 months) to maintain the coating for the 3 year duration
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>

                <Row className="">
                    <CardGroup>
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Glassa} />
                            <Card.Body>
                                <Card.Title className="display-6">Glassparency All Glass ($100)</Card.Title>
                                <Card.Text className="cardContent">
                                This is an add-on package to the Glassparency windshield coating. 
                                All remaining windows, to include optional sunroofs, are coated 
                                with this ceramic coating to improve clarity, visibility, and help 
                                prevent water spotting and etching from occurring.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Iglwheel} />
                            <Card.Body>
                                <Card.Title className="display-6">IGL Coatings Trim ($50 to $200)</Card.Title>
                                <Card.Text className="cardContent">
                                Harsh UV rays and environmental conditions can fade and damage plastics, 
                                vinyl surfaces, and other trim components. Application of IGL Coatings Trim 
                                rejuvenates these components and provides up to 2 years of protection from the 
                                elements to resist fading, cracking, and further damage from occurring. Pricing depends 
                                on vehicle's aesthetics and how much product needs to be used.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Igltrim} />
                            <Card.Body>
                                <Card.Title className="display-6">IGL Coatings Wheel ($200, $50 per wheel)</Card.Title>
                                <Card.Text className="cardContent">
                                Cleaning your vehicle’s wheels can be a hassle. Caustic detergents, road debris, 
                                and brake dust can damage the luster and finish on your wheels. To help prevent 
                                this damage, IGL Coatings Wheel is a coating that protects your wheels for up to 1 year. 
                                Wheels must be removed from the vehicle to be properly prepped and coated.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    
                </Row>

                <Row className="justify-content-center">
                    <CardGroup>
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Iglhead} />
                            <Card.Body>
                                <Card.Title className="display-6">IGL Coatings Headlight ($100)</Card.Title>
                                <Card.Text className="cardContent">
                                Have you ever seen faded or hazy headlights? 
                                UV rays break down modern plastic headlights and cause fading and cracking of 
                                the plastics, resulting in diminished headlight visibility. Combat this with 
                                IGL Coatings Headlight, a one year coating that prevents these circumstances from occurring.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Iglleather} />
                            <Card.Body>
                                <Card.Title className="display-6">IGL Coatings Leather ($200)</Card.Title>
                                <Card.Text className="cardContent">
                                Tired of spilling your coffee on your leather seats resulting in unsightly 
                                stains? Get your leather coated! With a one year durability, IGL Coatings 
                                leather provides hydrophobic resistance to liquids, dirt, and grime. Liquids 
                                will literally roll off the surface making cleanup super easy!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                        <Card className="cardChange" >
                            <Card.Img variant="top" src={Iglfabric} />
                            <Card.Body>
                                <Card.Title className="display-6">IGL Coatings Fabric ($200)</Card.Title>
                                <Card.Text className="cardContent">
                                IGL Coatings offers their Fabric ceramic coating. 
                                This turns upholstery into a liquid-shedding menace to 
                                spills, grime, and dirt. The result is clean seats, all the time!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
                
            </Container>
        </>
    )
};

export default Options;