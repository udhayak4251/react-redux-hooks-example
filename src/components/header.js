import React, { useState } from 'react';
import { addProducts } from '../actions/index';
import { useDispatch } from 'react-redux';
export default function Header() {
    const dispatch = useDispatch();
    const [product, setProduct] = useState();
    function updateProduct(event) {
        setProduct(event.target.value);
    }
    return(
        <div>
            <input onChange={updateProduct}></input>
            <button onClick={()=> dispatch(addProducts(product))}>Add Product </button>
        </div>
    );
}