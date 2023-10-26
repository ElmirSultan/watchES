import React from "react";
import "./navbar.scss";
import { BsSmartwatch } from "react-icons/bs";
import { navbarlinks } from "../../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Badge } from "antd";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo" onClick={() => navigate("/")}>
            <BsSmartwatch /> <p>watchES</p>
          </div>

          <div className="nav-links">
            {navbarlinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`${location.pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="others">
          <FiMoon style={{ cursor: "pointer" }} />
          <Badge
            count={cart.cartItems.length}
            offset={[0, 0]}
          >
            <BsFillBagFill style={{ cursor: "pointer",fontSize:"2rem" }} />
          </Badge>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
