import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        <div className="blog-content">
          <p className="date">15 July 2023</p>
          <h5 className="title">Consumerism in Contemprary American Culture</h5>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing el...
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
