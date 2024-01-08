import React, { useContext, useEffect, useState } from "react";
import "./../../Style/ProductCard.css";
import AddProduct from "./../../assets/images/add-product.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CartContext } from "../../UseContext/UseContext";

function ProductCard({ data, cardKey }) {
  let { cart, setCart } = useContext(CartContext);

  const addToCart = (productId, productName, price, quantity = 1) => {
    const cartProduct = {
      productId: productId,
      productName: productName,
      price: price,
      quantity: 1,
    };

    setCart([...cart, cartProduct]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <motion.div whileHover={{ scale: 1.1 }} className="product-card">
        <div className="product-card__img">
          <img src={data.imgUrl} alt="" />
        </div>
        <div>
          <div className="product-card__desc">
            <Link to={`/product/${data.id}`}>
              {" "}
              <h1>{data.productName}</h1>
              <p>{data.category}</p>
            </Link>
          </div>

          <div className="product-card__bottom">
            <p className="price">${data.price}</p>
            <img
              src={AddProduct}
              alt=""
              onClick={() => addToCart(data.id, data.productName, data.price)}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductCard;
