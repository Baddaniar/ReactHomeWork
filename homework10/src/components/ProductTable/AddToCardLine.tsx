import { useAppDispatch,useAppSelector } from "../../hooks"
import { addProductToCart } from "../../Slices/cartSlice"

const AddToCartLine = (props:any) =>{
    const dispatch = useAppDispatch() 
    const chosenProduct = useAppSelector((state) => 
    state.products.products.filter((product) => product.id === props.id))

    return(
        <>
        <span onClick={() => dispatch(addProductToCart({...chosenProduct[0]}))}>Add to Cart</span>
        </>
    )
}

export default AddToCartLine