import '../Styles/Voucher.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addVoucherToCart } from '../Reducers/cartSlice';

export default function Voucher(props) {
    const dispatch = useDispatch();

    const handleAddVoucherToCart = () => {
        dispatch(addVoucherToCart({
            id: props.voucher.id,
            amount: 1
        }));
    }

    return (
        <div className="voucher">
            <h3 className="name">{props.voucher.name}</h3>
            <span className="value">{props.voucher.value}</span>
            <button onClick={handleAddVoucherToCart}>Add to cart</button>
        </div>
    );
}