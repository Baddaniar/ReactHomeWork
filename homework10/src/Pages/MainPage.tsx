import AddProduct from "../components/AddProduct"
import Table from "../components/ProductTable/Table"
import EditProduct from "../components/ProductTable/EditProduct"
import Cart from "../components/Cart"


const MainPage = () => {
    return(
        <div>
            <Table />
            <AddProduct />
            <EditProduct />
            <Cart />
        </div>
    )
}

export default MainPage