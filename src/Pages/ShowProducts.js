import React from 'react';
import Products from "./Products";
import App from "../App";
import PropTypes from "prop-types";

function ShowProducts(props){
        return (
            <>
                    {props.products.map((product, i) =>{
                            return <Products product = {product} key ={i} />
                    })}
            </>
        )
        ;

}
ShowProducts.propTypes = {
    products: PropTypes.object,
    i: PropTypes.number
}

export default ShowProducts;

