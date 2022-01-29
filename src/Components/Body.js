import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import logo from "./pinguin.png";
import {Col, Container, Row} from "react-bootstrap";
import ShowProducts from "../Pages/ShowProducts";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import Registration from "../Pages/Registration";
import Entrance from "../Pages/Entrance";

const Body = () => {
    // const products = [
    //     {name: 'Кофта', price: '5000', img: logo},
    //     {name: 'Штаны', price: '3000',img: logo},
    //     {name: 'Кроссовки', price: '9000', img: logo},
    //     {name: 'Шапка', price: '800', img: logo},
    // ]

    return (
        <Router>
            <Container>
                {/*<ShowProducts products = {products}/>*/}
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route  path="/about" element={About} />
                    <Route  path="/contacts" element={Contacts} />
                    <Route  path="/blog" element={Blog} />
                    <Route  path="/registration" element={<Registration/>} />
                    <Route  path="/entrance" element={<Entrance/>} />
                </Routes>
            </Container>
        </Router>

    );
}

export default Body;