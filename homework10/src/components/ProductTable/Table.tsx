import TableRow from "./TableRow"
import { useAppSelector } from "../../hooks"

const Table = () => {
    const products = useAppSelector((state) => state.products.products)
    return(
        <div>
            <p>Product Table</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <TableRow key={product.id} {...product}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table