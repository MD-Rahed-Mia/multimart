import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "./../assets/Product.js";
import Helmet from "../component/Helmet/Helmet.jsx";
import "./../Style/Product-details.css";
import { IoIosStar } from "react-icons/io";
import CartIcon from './../assets/images/cartIcon.png';

function Product() {
  const { id } = useParams();

  const [productId, setProductId] = useState(productData);

  useEffect(() => {
    const filterProduct = productData.filter((item) => item.id == Number(id));
    setProductId(filterProduct);
  }, []);

  const n = productId[0].avgRating;

  return (
    <Helmet title="product">
      <div className="product-details">
        <div className="product-details-left">
          <img src={productId[0].imgUrl} alt="" />
        </div>
        <div className="product-details-right">
          <h1>{productId[0].productName}</h1>
          <p className="product-desc">{productId[0].description}</p>
          <p className="product-desc">
            {" "}
            <span className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <IoIosStar
                  key={i}
                  className={`star ${i < n ? "check" : i === n ? "half" : ""}`}
                />
              ))}
             
            </span>{" "}
            {productId[0].reviews[0].rating} out of 5.
            <h1 className="price">${productId[0].price}</h1>
            <button className="add-to-cart"><img src={CartIcon} alt="" /> add to cart</button>
          </p>
        </div>
      </div>
    </Helmet>
  );
}

export default Product;
