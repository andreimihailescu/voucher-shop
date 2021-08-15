import '../Styles/App.scss';
import React, { useState } from 'react';
import VouchersList from './VouchersList';

export default function App(props) {
    const [cart, setCart] = useState(0);

    function handleAddToCart (){
        setCart(cart + 1);
    }

    return (
        <main>
            <p>{cart}</p>
            <VouchersList handleAddToCart={handleAddToCart} />
        </main>
    );
}