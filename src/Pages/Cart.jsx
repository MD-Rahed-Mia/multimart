import React, { useContext, useEffect, useState } from "react";
import { CartContext, CartProvider } from "../UseContext/UseContext";
import productData from "./../assets/Product.js";
import "./../Style/Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (d) => {
    setCart(() => {
      let updateCart = cart.map((ele) => {
        if (ele.productId == d) {
          return {
            ...ele,
            quantity: Number(ele.quantity) + 1,
          };
        }
        return ele;
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      return updateCart;
    });
  };

  useEffect(() => {
    increaseQuantity();
  });

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-heading">Cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub total</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.productId}</td>
                    <td>{element.productName}</td>
                    <td>{element.price}</td>
                    <td>
                      <div className="product-quantity">
                        <button>-</button>
                        <p>{element.quantity}</p>
                        <button
                          onClick={() => increaseQuantity(element.productId)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{element.quantity * element.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <h1>Total: {}</h1>
      </div>
    </>
  );
}

export default Cart;
