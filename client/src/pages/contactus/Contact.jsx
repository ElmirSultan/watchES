import React from "react";
import "./contact.scss";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
import MyButton from "../../components/button/MyButton";

const Contact = () => {
  return (
    <section className="contact-us">
      <p>GET IN TOUCH</p>
      <h1>Contact Us</h1>

      <div className="contact-boxes">
        <div className="contact-box">
          <BiPhone className="icon" />
          <h5>Phone</h5>
          <div className="more">
            <p>Toll-Free: +994513622939</p>
          </div>
        </div>

        <div className="contact-box">
          <MdEmail className="icon" />
          <h5>Email</h5>
          <div className="more">
            <a href="mailto:elmirsultann@gmail.com">elmirsultann@gmail.com</a>
          </div>
        </div>

        <div className="contact-box">
          <TbLocationFilled className="icon" />
          <h5>Address</h5>
          <div className="more">
            <p>Baku,Ganjlik</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact form</h2>

        <div className="form-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.345509808083!2d49.849451075715564!3d40.40119605658522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d7420ae23%3A0x15a758a3ac7a85f1!2sGanjlik%20st.!5e0!3m2!1sen!2saz!4v1698080898793!5m2!1sen!2saz"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Comment"
            ></textarea>

            <MyButton buttonText={"Send"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
