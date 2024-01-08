import "./../Style/Home.css";
import React, { useEffect, useState } from "react";
import Helmet from "../component/Helmet/Helmet";
import "./../Style/hero-section.css";
import { Link } from "react-router-dom";
import Service from "../component/Service/Service";
import ProductList from "../component/UI/ProductList";
import productData from "./../assets/Product.js";

function Home() {
  const year = new Date().getFullYear();

  const [data, setData] = useState(productData);
  const [bestSelling, setBestSelling] = useState(productData);

  useEffect(() => {
    const filterChair = productData.filter((item) => {
      return item.category === "chair";
    });
    const filterBestSelling = productData.filter((item) => {
      return item.category === "sofa";
    });
    setData(filterChair);
    setBestSelling(filterBestSelling);
  }, []);

  return (
    <>
      <Helmet title="home">
        <section className="hero-section">
          <div className="hero-left">
            <h2>Trending product in {year}</h2>
            <h1>Make your interior more realistic and stylish.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              consequuntur, repellat error, voluptatibus eligendi reprehenderit
              blanditiis voluptate minus earum fugiat nisi. Error, eius.
            </p>
            <button>
              <Link to={"/shop"}>SHOP NOW</Link>
            </button>
          </div>
          <div className="hero-right">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
              alt="design"
            />
          </div>
        </section>

        <div className="service-section">
          <Service />
        </div>
        <div className="trending-products">
          <h1 className="trending-heading">Trending Products</h1>
          <ProductList data={data} />
        </div>
        <div className="best-selling">
          <h1 className="best-heading">Best Selling Products</h1>
          <ProductList data={bestSelling} />
        </div>
      </Helmet>
    </>
  );
}

export default Home;
