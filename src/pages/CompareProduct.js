import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="product-card-image">
                <img src="images/ipad-mini.jpeg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Refurbished iPad mini 6 Wi-Fi 64GB - Space Gray
                </h5>
                <h6 className="price mb-3 mt-4">$339.00</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Apple</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Ipad</p>
                </div>
                <div className="product-detail">
                  <h5>Availability:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10"></div>
                  <h5>S</h5>
                  <h5>M </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="product-card-image">
                <img src="images/ipad-mini.jpeg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Refurbished iPad mini 6 Wi-Fi 64GB - Space Gray
                </h5>
                <h6 className="price mb-3 mt-4">$339.00</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Apple</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Ipad</p>
                </div>
                <div className="product-detail">
                  <h5>Availability:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Colors />
                </div>
                <div className="product-detail">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10"></div>
                  <h5>S</h5>
                  <h5>M </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
