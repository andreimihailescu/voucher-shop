import React, { useState } from "react";
import Voucher from './Voucher';
import { useSelector } from 'react-redux';

export default function VouchersList(props) {
    const vouchers = useSelector(state => state.vouchers.list);

    console.log(vouchers);
    function getVouchersList(){
        let list = [];

        for(let i = 0; i < vouchers.length; i++){
            list.push(<Voucher key={i} voucher={vouchers[i]} />)
        }

        return list;
    }

    return (
        <React.Fragment>
            {getVouchersList()}
        </React.Fragment>
    );
}