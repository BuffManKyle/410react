import "bootstrap/dist/css/bootstrap.min.css";
import './form.css';
import { Button, Col, Container } from 'react-bootstrap';

function Contactform () {
    return (
        <>
            <Container>
                <form className="contactForm" autocomplete="off">
                    <Col>
                        <input name="name" type="text" placeholder="Name"></input>
                    </Col>
                    <Col>
                        <input name="email" type="email" placeholder="Email" required></input>
                    </Col>
                    <Col>
                        <input name="phone" type="tel" placeholder="Phone Number" required></input>
                    </Col>
                    <Col>
                        <select id="service" name="service" >
                            <option value="protectiveCoating" >Protective Coating</option>
                            <option value="paintEnhancment" >Coating + Paint Enhancment</option>
                            <option value="one" >Coating + One Stage Correction</option>
                            <option value="multi" >Coating + Multistage Correction</option>
                            <option value="addon" >Coating Add-Ons</option>
                           </select>
                    </Col>
                    <Col>
                        <textarea name="message" placeholder="Give us more details"></textarea>
                    </Col>
                    <Button className="scrollbtn" size="lg">Send</Button>
                </form>


            </Container>
        </>
    );
};

export default Contactform;