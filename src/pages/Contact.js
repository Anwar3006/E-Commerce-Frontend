import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9353459325403!2d-0.16379977524150102!3d5.576577044404015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9aba33111e9b%3A0x5205ac08e46586f5!2sLA%20Wireless%20Cluster%20of%20School%2C%20Labadi%20Link%2C%20Accra!5e0!3m2!1sen!2sgh!4v1689293020251!5m2!1sen!2sgh"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-3">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" name="name" placeholder="Name" />
                  <CustomInput type="email" name="email" placeholder="Email" />
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Contact  Number"
                  />
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                    <div>
                      <button className="button border-0 mt-3">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno: 104 Lomo Adawu Street, La Wireless, Accra
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <FiPhoneCall className="fs-5" />
                      <a href="tel: +233 543339109">+233-543-339109</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <FiMail className="fs-5" />
                      <a href="mailto:anwarsadat.d2@gmail.com">
                        anwarsadat.d2@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0 ">Mondays - Fridays (8am - 5pm)</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
