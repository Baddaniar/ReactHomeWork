import {FC } from 'react'
import { IProducts } from '../../types'
import DeleteLine from './DeleteLine'
import EditLine from './EditLine'
import AddToCartLine from './AddToCardLine'

const TableRow :FC<IProducts> = (props) => {
    return(
        <tr>
            <td>{props.productName}</td>
            <td>{props.productAmount}</td>
            <td>{props.productPrice}</td>
            <td><DeleteLine id={props.id}/> / <EditLine id={props.id}/> / <AddToCartLine id={props.id} /></td>
        </tr>
    )
}

export default TableRow