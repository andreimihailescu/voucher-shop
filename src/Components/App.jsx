import '../Styles/App.scss';
import React from 'react';
import VouchersList from './VouchersList';
import CartCounter from './CartCounter';

export default function App(props) {
    return (
        <main>
            <CartCounter />
            { <VouchersList /> }
        </main>
    );
}