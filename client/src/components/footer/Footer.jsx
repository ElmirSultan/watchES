import React from "react";
import "./footer.scss";
import { BsSmartwatch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <BsSmartwatch /> <p>watchES</p>
        </div>

        <div className="links">
          <div className="link">
            <Link>Home</Link>
            <Link>Products</Link>
          </div>

          <div className="link">
            <Link>Privacy Policy</Link>
            <Link>Customer Support</Link>
          </div>

          <div className="link">
            <Link>Contact Us</Link>
            <Link>Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2023 Elmir Sultan
      </div>
    </footer>
  );
};

export default Footer;
