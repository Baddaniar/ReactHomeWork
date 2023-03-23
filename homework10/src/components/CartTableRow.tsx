import {FC } from 'react'
import { IProducts } from '../types'
import DeleteFromCartLine from './DeleteFromCartLine'


const CartTableRow :FC<IProducts> = (props) => {
    return(
        <tr>
        <td>{props.productName}</td>
        <td>{props.productAmount}</td>
        <td>{props.productPrice}</td>
        <td><DeleteFromCartLine id={props.id}/></td>
    </tr>
    )
}

export default CartTableRow