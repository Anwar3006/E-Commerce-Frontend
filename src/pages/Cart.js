import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import tv from "../images/tv.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Products</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data d-flex mb-2 justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={tv} className="img-fluid" alt="tv" />
                </div>
                <div className="w-75">
                  <p>Kids headphones bulk 10pack multi-colored for students</p>
                  <p>Color: Pink</p>
                  <p>Size: S</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 399.99</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiOutlineDelete className="text-danger fs-4" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 399.99</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/products" className="button">
                Continue Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ 399.00</h4>
                <p>Taxes and Shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
