import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch1 from "../images/watch1.jpeg";
import watch2 from "../images/watch2.jpeg";
import view from "../images/view.svg";
import addcart from "../images/addcart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transpabutton">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch1} className="img-fluid" alt="watch" />
            <img src={watch2} className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10pack multi-colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              exercitationem iure vitae cumque provident quod quisquam ipsum
              quas temporibus tempora repudiandae, odio aut adipisci neque
              earum? Itaque nemo architecto dolores?
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add-cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch1} className="img-fluid" alt="watch" />
            <img src={watch2} className="img-fluid" alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids headphones bulk 10pack multi-colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit facere earum in. Dolorum eos cum nihil
              exercitationem ad itaque ipsum qui nesciunt enim eaque at, quia
              suscipit deleniti vero dolores.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add-cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
