import React from "react";
import ProductCard from "./ProductCard";
import "./../../Style/ProductList.css";
function ProductList({ data }) {
  return (
    <div className="product-list">
      {data.map((elemen, index) => {
        return (
          <ProductCard data={elemen} key={elemen.id} cardKey={elemen.id} />
        );
      })}
    </div>
  );
}

export default ProductList;
