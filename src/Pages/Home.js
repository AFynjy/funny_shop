import React from 'react';
import ShowProducts from "./ShowProducts";
import logo from "../Components/pinguin.png";

const Home = () => {
    const products = [
        {name: 'Кофта', price: '5000', img: logo},
        {name: 'Штаны', price: '3000',img: logo},
        {name: 'Кроссовки', price: '9000', img: logo},
        {name: 'Шапка', price: '800', img: logo},
    ]

    return (
            <div>
                <ShowProducts products = {products}/>
            </div>
        );
}

export default Home;