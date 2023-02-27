import { FC } from "react"
import IStore from "../../types"
import TableItem from "../TableItem/TableItem"
import TableHeader from "../TableHeader/TableHeader"
import './Table.css'

interface IStoreList {
    stores: IStore[]
}

const Table: FC<IStoreList> = ({ stores }) => {
    return (
        <table>
            <TableHeader />
            <tbody>
                {stores.map(store => <TableItem key={store.Id}  {...store} />)}
            </tbody>
        </table>

    )
}

export default Table