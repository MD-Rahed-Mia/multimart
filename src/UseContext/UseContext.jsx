import React, { createContext, useState } from "react";

export let CartContext = createContext(null);

export const CartProvider = (props) => {
  let arr = JSON.parse(localStorage.getItem("cart"));
  console.log(arr);

  let [cart, setCart] = useState(arr);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
