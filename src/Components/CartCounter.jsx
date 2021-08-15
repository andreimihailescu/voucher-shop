import React from 'react';
import { useSelector } from 'react-redux';

export default function App(props) {
    const counter = useSelector(state => state.cart.vouchers.length);

    return (
        <div>
            <p>{counter}</p>
        </div>
    );
}