import React, { useState } from "react";
import Voucher from './Voucher';
import useVouchersService from "../Services/useVouchersService";

export default function VouchersList(props) {
    const [vouchers] = useState(useVouchersService());
    const [count, setCount] = useState(3);

    let vouchersz = [];

    for(let i = 0; i < count; i++){
        vouchersz.push(<Voucher key={i} voucher={vouchers[i]}/>);
    }

    return (
        <React.Fragment>
            {/* {vouchers.map(voucher => <Voucher key={voucher.id} voucher={voucher} />)} */}
            {vouchersz}
        </React.Fragment>
    );
}