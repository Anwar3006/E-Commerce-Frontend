import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Shipping = () => {
  return (
    <>
      <Meta title={"Shpping Policy"} />
      <BreadCrumb title="Shpping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="policy"></div>
        </div>
      </Container>
    </>
  );
};

export default Shipping;
