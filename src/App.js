import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
// import ShowProducts from "./Pages/ShowProducts";
import React from "react";
// import logo from './Components/pinguin.png';
// import Registration from "./Pages/-Registration";
import Registration from "./Pages/Registration";
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import About from "./Pages/About";
// import Contacts from "./Pages/Contacts";
// import Blog from "./Pages/Blog";


function App() {

  return (
    <div>
        <Header />
        {/*<Registration/>*/}
        <Body />
    </div>
  );
}

export default App;
