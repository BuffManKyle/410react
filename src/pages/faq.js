import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/pages.css";
import { Accordion, Container } from 'react-bootstrap';

function Faq () {
    return (
        <>
            <Container fluid className="cardBackground">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h1 class="display-5">What is a paint correction?</h1></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            In layman’s terms, a paint correction is the removal of swirl marks, scratches, 
                            and paint imperfections via the clear coat of a vehicle’s paint being “leveled.”
                            Leveling is the process of removing micro-millimeter thin layers of a paint’s 
                            clearcoat in a uniform manner, effectively removing swirl marks, scratches,
                            and paint imperfections.  There are varying levels to how much paint correction 
                            can be achieved using different products and DA/rotary polisher pads. 
                            A paint correction should ALWAYS, and does with us, start with a deep clean of the 
                            paint, iron and environmental contaminants removed from the paint, 
                            and particulate contaminants removed from the paint via the clay barring process.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h1 class="display-5">Is a paint correction necessary to apply a coating?</h1></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            In short, no.  A coating can be applied over any surface.  
                            However, in order to guarantee the coating adheres properly to the clear coat of your vehicle, 
                            a decontamination must occur.  First off, part of decontamination is the clay barring process.  
                            This process in and of itself is a mechanical abrasive and can cause marring in certain instances. 
                            Second off, as a professional, I will not coat a vehicle that has not received at least a one stage polish.  
                            Once a coating is applied, any defects seen in the paint will be locked in for the duration of that coating.  
                            This will result in an unsightly appearance of the vehicle.  Coatings essentially act as a magnifying glass on your vehicle's paint,
                            exposing these defects even more.  A polish must occur to ensure the vehicle reaches its highest potential of gloss, clarity, and depth.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h1 class="display-5">What is a "paint decontamination?"</h1></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Albeit a vehicle's clear coat paint is a hard, solid object to us, 
                            it is actually porous and not a complete solid.  Environmental contaminates 
                            (Ex. brake dust) can settle on the clear coat.  As a result of being porous,
                            these contaminates and microscopic particulates can settle into the clear 
                            coat and become embedded if the vehicle does not have a proper protective
                            element on it (waxes, sealants, and coatings).  These contaminates oftentimes 
                            dull and diminish a vehicle's gloss and depth of color.  A "paint decontamination" 
                            is the process of using chemical means (an iron remover) to break down these particulates 
                            to help remove them from the clear coat.  Then, mechanical means, known as clay barring, are
                            used to gently massage the clear coat and physically remove these particulates.  
                            The result is a completely clean, raw surface revealing your vehicle's true shine.  
                            If a decontamination is not conducted prior to paint correction, the process of 
                            buffing the vehicle can actually pick these contaminates up into the buffing pad, 
                            resulting in dragging those particulates across your paint and causing more harm than good.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h1 class="display-5">Do coatings prevent scratches?</h1></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            No.  No coating will ever prevent scratches, swirls, or blemishes.  
                            If you see anywhere online that they do, that is an outright lie.  
                            Here at Four One O' Detailing, we pride ourselves in transparency and honesty.  
                            Coatings WILL NOT prevent scratches.  Coatings are resistant to scratches to an extent, 
                            however their bread and butter lies in their ability to prevent dirt, debris, road grime, 
                            and other contaminates from sticking to your vehicle.  As a result, when washing the vehicle, 
                            they are subject to being easily removed and lifted from the surface instead of being dragged 
                            across your paintwork as you're washing the vehicle.  Anything that gets used as intended 
                            is subject to degradation over time, however coatings help lessen the damage that is 
                            instilled on your vehicle exponentially more than unprotected vehicles or conventional waxes/sealants.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h1 class="display-5">Are coatings the end all, be all to detailing my vehicle?</h1></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            No.  Coatings only hold up as well as the care you take of your vehicle.  
                            Coatings still require maintenance washes and sealant toppers to be 
                            applied to ensure its integrity is intact and that it lasts the duration 
                            of the durability estimate given by the manufacturer.  The major selling 
                            point of coatings is how EASY washing the vehicle and completing maintenance 
                            washes is.  We are available upon request to conduct maintenance washes 
                            schedule permitting.  Most manufacturers suggest a maintenance wash and 
                            sealant topper once a week.  This is not ideal or practical for anyone.  
                            Instead, we have found at minimum once a month maintenance washes and at 
                            least once every three months that an appropriate sealant is applied overtop 
                            of the coating to rejuvenate and restore the coating's protective properties.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            </Container>
        </>
    )
};

export default Faq;