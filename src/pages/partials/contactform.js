import "bootstrap/dist/css/bootstrap.min.css";
import './form.css';
import { Col, Container } from 'react-bootstrap';

function Contactform () {
    return (
        <>
            <Container>
                <form className="contactForm">
                    <Col>
                        <input name="name" type="text" placeholder="Name"></input>
                    </Col>
                    <Col>
                        <input name="email" type="email" placeholder="Email"></input>
                    </Col>
                    <Col>
                        <input name="phone" type="tel" placeholder="Phone Number"></input>
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
                        <textarea name="message" placeholder="Message"></textarea>
                    </Col>
                    
                    
                    
                </form>


            </Container>
        </>
    );
};

export default Contactform;