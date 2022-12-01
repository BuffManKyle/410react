import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import Single from './single';
import Multi from './multi';
import Aio from './aio';



function Paintcorrectionpage () {

    
  

    return (
        <>
            
            <div id='single'>
                <Single/>
            </div>
            <div id='multi'>
                <Multi/>
            </div>
            <div id='aio'>
                <Aio/>
            </div>
        
        </>
    );

}

export default Paintcorrectionpage;