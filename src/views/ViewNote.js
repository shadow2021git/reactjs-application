import react, { useEffect,useState } from "react";
import {collection, getDoc, getDocs,deleteDoc,doc} from "firebase/firestore";
import {db} from '../firebase_config';
import './ViewNote.css';


function ViewNote(){

useEffect(()=>{
    getNote();
},[])



const [notes, setNotes] = useState([]);

    const getNote = async()=>{
        const querySnapshot = await getDocs(collection(db,"military_docs")) ;  
        
            setNotes(querySnapshot.docs.map((doc)=>({...doc.data() })))  
          
    }

    return (
        <div className="container-fluid">
            <div className="row gridOne">
                <div className="col-md-3 ">

                </div>
                <div className="col-md-6">              

                {notes.map(note=>{
                    return(
                        <div>
                                <br/>
                                <div class="card">
                                    
                                    <div class="card-body">
                                    <div>
                                <h1 class="display-6 card-title">{note.title}</h1>
                                <hr/>
                                <p class="card-text doc"> {note.document}</p>

                                <div className="row">
                                    <div className="col-6 references">
                                    <p class="card-text">References : {note.references}</p>
                                    </div>
                                    <div className="col-6 author">
                                    <p class="card-text">Author : {note.author}</p>
                                    </div>
                                </div>
                                
                               
                                
                                
                                </div>
                                    </div>

                                </div>
                                <br/>
                        </div>
                    )
                })}  
                </div>
                <div className="col-md-3 ">
                    
                </div>
                </div>
                
            </div>
           
        
    )

}
export default ViewNote;