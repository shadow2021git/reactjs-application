import react,{Component} from "react";
import './Image.css';

class ImageComponent extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row  Background">

                <div className="col-md-8">
                    <div className="Image">
                    </div> 
                </div>

                <div className="col-md-4 Desc">
                <h1 class="display-6 ">A true soldier fights 
                not because he hates what is in front of him, <br/> but because he loves what is behind him.</h1>
                <br/>
                <div className="row Height col-12">
                <p>A soldier is the man or woman who fights for their government and carries the weapons, risking their life in the process. The word comes from the Latin solidus, which is the name of the gold coin used to pay soldiers who fought in the Roman army.</p>
                <p>An army, ground force or land force is a fighting force that fights primarily on land. In the broadest sense, it is the land-based military branch, service branch or armed service of a nation or state. </p>
                </div>

                <div className="row Ravi">
                    <div className="col-12">
                    <h6> <small class="text-muted">Developed by Ravindu Lakmal</small> </h6>
                    <h6> <small class="text-muted">All rights reserved</small> </h6>
                    </div>
                    
                </div>
               
                </div>
                </div>
            
            </div>
            
        )
    }
}
export default ImageComponent;