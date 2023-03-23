import { useState, useEffect } from "react";
import { useAppSelector } from "../hooks";
import CartTableRow from "./CartTableRow";

const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cartProducts.products);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cartProducts.length > 0) {
      const summTotal = cartProducts.reduce((total, object) => {return total + object.productAmount;}, 0);
      const summPrice = cartProducts.reduce((total, object) => {return total + object.productPrice;}, 0);
      setTotalAmount(summTotal);
      setTotalPrice(summPrice)
    }
  }, [cartProducts]);

  return (
    <div>
      <h1>Cart Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th>/</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product) => (
            <CartTableRow key={product.id} {...product} />
          ))}
          <tr>
            <td>Total</td>
            <td>{totalAmount}</td>
            <td>{totalPrice}</td>
            <td>----</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
