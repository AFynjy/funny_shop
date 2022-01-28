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

const Body = () => {
    const products = [
        {name: 'Кофта', price: '5000', img: logo},
        {name: 'Штаны', price: '3000',img: logo},
        {name: 'Кроссовки', price: '9000', img: logo},
        {name: 'Шапка', price: '800', img: logo},
    ]

    return (
        <Router>
            <Container>
                <ShowProducts products = {products}/>
            </Container>
        </Router>

    );
}

export default Body;