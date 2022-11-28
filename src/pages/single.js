import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"
import "./styles/single.css";
import Onestageimg from './assets/images/314789663_670013071295906_1018968343675313872_n.jpg'

function Single () {
    return (
        <>
            
                    <div>
                        <h1 className="oneStageTitle">One Stage Paint Correction</h1>
                    </div>
                    <div  className="oneStageImgWrapper">
                        <img className="oneStageImg"
                        src={Onestageimg}
                        alt="Mercades hood"
                    />
                    </div>

                    <div className="oneStageContent">
                        <p>          
                            Shower foam hand wash and a two-bucket method to start. Vehicle is stripped of environmental fallout and contaminants using an iron fallout remover and a hand applied clay bar process completed.  Paint is then polished using a DA polisher and 65-75% of paint defects removed.  Deeper scratches and heavy abrasions will remain, but will be severely less noticeable.  A ceramic wax is then applied to the paint to provide extreme water and UV protection [up to nine (9) month durability].  Wheels, tires, and wheel wells are cleaned and a gel tire shine is applied to retain tire sheen with no tire sling.
                        </p>
                        <p>
                            The best protection for a one stage paint correction is a coating.  Let us know your needs and we can get you setup with the appropriate package!
                        </p>  
                    </div>
                
                
        </>
    )
};

export default Single;