import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import { Container } from 'react-bootstrap';

function Explain () {
    return (
        <>
            <Container>
                <h1>What is an "automotive protective coating"?</h1>

                <p>
                    Long gone are the days of waxing your vehicle by hand for only a couple weeks worth of protective.  Automotive protective coatings are the new wave of ultimate vehicle protection.  Here at Four One O', we utilize a PTFE or Teflon based coating that provides years of unparalleled protection.
                </p>
                
                <p>Resistance to environmental contaminates such as:</p>
                <ul>
                    <li>brake dust </li>
                    <li>iron particulates</li>
                    <li>bird droppings</li>
                    <li>bug splatter</li>
                    <li>acidic rain</li>
                </ul>

                <p>Other notable qualities:</p>
                <ul>
                    <li>UV protection built in to help your paint resist fading and looking dull over time. </li>
                    <li>Vehicles stay cleaner, longer</li>
                    <li>Intense hydrophobic properties</li>
                    <li>Reduction in amount of time it takes to clean the vehicle</li>
                </ul>
            </Container>
        </>
    )
};

export default Explain;