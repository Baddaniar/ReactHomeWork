import { useAppDispatch } from "../hooks";
import { deleteProductFromCart } from "../Slices/cartSlice";

const DeleteFromCartLine = (props: any) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <span onClick={() => dispatch(deleteProductFromCart(props.id))}>Delete</span>
    </>
  );
};

export default DeleteFromCartLine;
