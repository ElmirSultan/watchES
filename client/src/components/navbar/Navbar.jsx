import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { BsSmartwatch } from "react-icons/bs";
import { navbarlinks } from "../../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { BsFillBagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Badge, message } from "antd";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {
  decrease,
  deleteWatch,
  increase,
  reset,
} from "../../toolkit/cartslice";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [basket, setBasket] = useState(false);
  const openBasket = () => {
    setBasket(true);
  };
  const outsideRef = useRef();
  useEffect(() => {
    function clickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setBasket(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [outsideRef]);

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
            onClick={openBasket}
            style={{ cursor: "pointer" }}
          >
            <BsFillBagFill style={{ cursor: "pointer", fontSize: "2rem" }} />
          </Badge>
        </div>
      </nav>

      {basket && (
        <div className="basket-back">
          <div className="basket" ref={outsideRef}>
            <div className="close-icon" onClick={() => setBasket(false)}>
              <AiOutlineCloseSquare />
            </div>

            <div className="basket-items">
              {cart.cartItems.map((item) => (
                <li key={item._id}>
                  <div className="basket-item">
                    <div className="image-side">
                      <img src={item.watchImage} alt="" />
                    </div>
                    <div className="name-mark-price">
                      <div className="name-mark">
                        <p>{item.watchMark}</p>
                        <p>{item.watchName}</p>
                      </div>
                      <div className="price">
                        <p>
                          <span>{item.newPrice}$ </span>X {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="incrs-decrs">
                        <AiFillPlusCircle
                          onClick={() => dispatch(increase(item))}
                        />
                        <p>{item.quantity}</p>
                        <AiFillMinusCircle
                          onClick={() => dispatch(decrease(item))}
                        />
                      </div>

                      <RiDeleteBin5Fill
                        className="del-icon"
                        onClick={() => {
                          dispatch(deleteWatch(item));
                          message.success(
                            "The product was successfully deleted"
                          );
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </div>

            <div className="total-price">
              <p className="total">Total: {cart.total}$</p>
              <div
                onClick={() => {
                  dispatch(reset());
                  message.success("The basket successfully cleared");
                }}
                className="clean"
              >
                <p>Clean</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
