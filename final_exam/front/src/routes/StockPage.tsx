import{useAppDispatch, useAppSelector} from '../hooks'
import { useEffect } from 'react'
import {fetchProducts } from '../slices/productSlice'

const StockPage = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.products)

    useEffect(() =>{
        dispatch(fetchProducts())
    },[])
    return(
        <div>
            <h1>Склад</h1>
            {products.map((product) => <p>{product.product_name}</p>)}
        </div>
    )
}

export default StockPage