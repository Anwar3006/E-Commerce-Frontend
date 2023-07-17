import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/ipad-mini.jpeg"
                  className="w-100 img-fluid"
                  alt="ipad-mini"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Refurbished iPad mini 6 Wi-Fi 64GB - Space Gray
                </h5>
                <h6 className="price">$399.00</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/ipad-mini.jpeg"
                  className="w-100 img-fluid"
                  alt="ipad-mini"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Refurbished iPad mini 6 Wi-Fi 64GB - Space Gray
                </h5>
                <h6 className="price">$399.00</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/ipad-mini.jpeg"
                  className="w-100 img-fluid"
                  alt="ipad-mini"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Refurbished iPad mini 6 Wi-Fi 64GB - Space Gray
                </h5>
                <h6 className="price">$399.00</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/ipad-mini.jpeg"
                  className="w-100 img-fluid"
                  alt="ipad-mini"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Refurbished iPad mini 6 Wi-Fi 64GB - Space Gray
                </h5>
                <h6 className="price">$399.00</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
