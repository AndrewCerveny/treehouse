import React from "react";
import house from "../../images/iconhouse.png";
import whiteTree from "../../images/treebody.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-area">
      <section className="title-area">
        <div className="icon-area">
          <img className="house" src={house} alt="house logo" />
          <img className="tree" src={whiteTree} alt="White tree logo" />
        </div>
        <section className="title-wrap">
          <h1>TreeHouse</h1>
          <h2>Absolute Best Kids' Play Address </h2>
        </section>
        <section />
      </section>
      <div className="banner-bottom"></div>
    </section>
  );
};

export default Banner;
