import React from 'react';
import { useSelector } from 'react-redux';
export default function Footer() {
    const product = useSelector(state=> state.productReducer);
    return(
        <div>
            {product.products}
        </div>
    );
}