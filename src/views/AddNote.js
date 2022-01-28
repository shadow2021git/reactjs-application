import react, { useState } from "react";
import './AddNote.css';
import {db} from '../firebase_config'
import {addDoc,collection} from 'firebase/firestore'

function AddNote(){

    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [references, setReferences] = useState('');
    const [document, setDocument] = useState('');

const addNote= async()=>{
    const docRef = await addDoc(collection(db, "military_docs"), {
        author: author,
        title: title,
        references: references,
        document:document
      }).then(res=>{
          alert("Note Added");
      }).catch(err=>{
          alert("Failed attempt.");
      });
}



    return (
        <div className="container-fluid">
        <div className="row backgroundStyle">
            <div className="col-md-3 cama">
               
            
            </div>
            <div className="col-md-2 desc ">

            <p>Author : </p> <br/>
            <p>Reference resources : </p> <br/>
            <p>Time  : </p> <br/>
            <p>Date : </p> <br/>
            <p>Title : </p> <br/>
            <p>Document : </p>
                
            </div>
            <div className="col-md-4 formOne ">

                <form>
                    <input type="text" value={author} onChange={(e)=>{
                        setAuthor(e.target.value)
                    }} placeholder="author" className="form-control"/> <br/>
                    <input type="text"  value={references} onChange={(e)=>{
                        setReferences(e.target.value)
                    }} placeholder="references" className="form-control"/><br/>
                    <input type="time" placeholder="time" className="form-control"/><br/>
                    <input type="date" placeholder="date" className="form-control"/><br/>
                    <input type="text"  value={title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} placeholder="title" className="form-control"/><br/>
                    <textarea type="text"  value={document} onChange={(e)=>{
                        setDocument(e.target.value)
                    }} rows="6" placeholder="write your note here" className="form-control"/><br/>
                    <button type="button" className="btn btn-secondary" onClick={addNote} >Save Note</button>
                </form>
                
            </div>
            <div className="col-md-3 cama ">
            
            </div>
        </div>

          
        </div>
    )

}
export default AddNote;