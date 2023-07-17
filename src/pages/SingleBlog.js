import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import blog1 from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <MdOutlineKeyboardBackspace className="fs-4" />
                Return to blogs
              </Link>
              <h3 className="title">
                Consumerism in Contemporary American Culture
              </h3>
              <img src={blog1} className="img-fluid w-100 my-4" alt="blogs" />
              <p>
                One bright spot in the midst of the country's economic downturn
                may be a long-overdue focus on reining in our spending. Since
                1982, Americans' personal savings rate has dropped from 11
                percent to below zero, according to the U.S. Department of
                Commerce, and personal bankruptcy filings have reached record
                highs. As the debt load has risen, psychologists have
                increasingly been called on to explain why Americans overspend.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
