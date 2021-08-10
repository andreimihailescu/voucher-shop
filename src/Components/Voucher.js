// import './Voucher.css';
import React from 'react';

export default function Voucher(props) {
    return (
        <div className="voucher">
            <h3 className="name">{props.voucher.name}</h3>
            <span className="value">{props.voucher.value}</span>
        </div>
    );
}