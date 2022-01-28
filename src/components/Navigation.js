import react from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navigation(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Military Documents</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/addnote" >Add Note</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewnote">View Notes</Link>
        </li> 
      </ul>
    </div>
    
  </div>
</nav>

        </div>
    )
}
export default Navigation;