import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Colors from "../components/Colors";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 600,
    // height: 300,
    zoomWidth: 500,
    img: "https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png",
  };
  // eslint-disable-next-line
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Insert Product Name"} />
      <BreadCrumb title="Insert Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="product-title">
                <h3>Kids headphones bulk 10pack multi-colored for students</h3>
              </div>
              <div className="border-bottom">
                <p className="price">$ 399.99</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    classNames="stars"
                    count={5}
                    size={16}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 total-reviews">(2 Reviews)</p>
                </div>
                <a href="#review" className="mt-3 mb-3 review-link">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Apple</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Accessories</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center mb-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-10">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-2">
                  <h3 className="product-heading">Color :</h3>
                  <Colors className="mb-2" />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-1 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "80px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-3">
                    <button className="button border-0" type="submit">
                      Add to Cart
                    </button>
                    <Link className="button buy">Buy it Now</Link>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/#" className="review-link">
                      <GoGitCompare className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/#" className="review-link">
                      <FcLike className="fs-5 me-2" />
                      Add to wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 align-items-right mt-4 mb-3 py-2">
                  <h3 className="product-heading">
                    <MdOutlineLocalShipping className="fs-5 me-2" />
                    Shipping & Returns
                  </h3>
                  <p className="product-data">
                    Free Shipping and Returns available for all orders! <br />
                    We ship all US domestic orders
                    <b>between 2-5 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-right flex-column mt-4 mb-3 py-2">
                  <h3 className="product-heading">
                    <FiCopy className="fs-5 me-2" />
                    Copy Link
                  </h3>
                  <a
                    className="review-link"
                    href="/#"
                    onClick={() => {
                      copyToClipboard(
                        "https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png"
                      );
                    }}
                  >
                    https://www.apple.com/v/apple-watch-se/k/images/meta/gps-lte__e6rpgo83mu4i_og.png
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                aliquid officiis itaque, vitae fugit veniam earum? Vero
                obcaecati tempore impedit, eligendi ipsam quos repellat
                consectetur ea soluta, sint, repudiandae rem!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div id="review" className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={18}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className="text-dark text-decoration-underline"
                      href="/#"
                    >
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={18}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                    <div className="mt-3 d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Anwar</h6>
                    <ReactStars
                      count={5}
                      size={15}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vero quisquam unde rem iste, reiciendis nemo similique
                    doloribus repellat vitae ea tenetur dolor doloremque quod,
                    aliquid qui labore fugiat adipisci nostrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
