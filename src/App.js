import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import ImageComponent from './components/Image';
import ViewNote from './views/ViewNote';
import AddNote from './views/AddNote';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navigation/>
      <Routes>
       <Route path="/" element={<ImageComponent/>} /> 
       <Route path="viewnote" element={<ViewNote/>} /> 
        <Route path="addnote" element={<AddNote/>} />
      </Routes>
      

    </div>
  );
}

export default App;
