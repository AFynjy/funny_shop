import React from 'react';
import PropTypes from 'prop-types';

function Products({product, i}){
        return (
            <>
                <img className="Avatar" src={ product.img } />
                <li>
                    {product.name}
                    {product.price}
                </li>
            </>
        );
}

Products.protoTypes = {
    product: PropTypes.object
}

export default Products;

