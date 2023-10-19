import React from "react";
import "./navbar.scss";
import { BsSmartwatch } from "react-icons/bs";
import { navbarlinks } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { BsFillBagFill } from "react-icons/bs";


const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo">
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
          <BsFillBagFill style={{ cursor: "pointer" }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
