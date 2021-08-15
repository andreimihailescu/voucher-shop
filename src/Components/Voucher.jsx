import '../Styles/Voucher.scss';
import React from 'react';

export default function Voucher(props) {
    return (
        <div className="voucher">
            <h3 className="name">{props.voucher.name}</h3>
            <span className="value">{props.voucher.value}</span>
            <button onClick={props.handleAddToCart}>Add to cart</button>
        </div>
    );
}