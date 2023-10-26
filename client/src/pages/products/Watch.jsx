import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./watchabout.scss";
import { BsSmartwatch } from "react-icons/bs";
import MyButton from "../../components/button/MyButton";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { addWatch } from "../../toolkit/cartslice";
const Watch = () => {
  const [watches, setWatches] = useState([]);
  const showAllWatches = async () => {
    try {
      const response = await fetch(
        "http://localhost:7700/watches/get-all-watches"
      );

      if (!response.ok) {
        throw new Error("There is a problem");
      }

      const newData = await response.json();
      setWatches(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showAllWatches();
    window.scrollTo(0,0)
  }, []);

  const { watchName } = useParams();

  const selectedWatch = watches.find(
    (item) => item.watchMark === decodeURIComponent(watchName)
  );

  // redux time
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addWatch({...selectedWatch,quantity:1}));
    message.success("The product successfully added to cart")
  }

  return (
    <section className="watch-about">
      {selectedWatch && (
        <div className="watch-about-card">
          <div className="left-card">
            <div className="logo">
              <BsSmartwatch /> <p>watchES</p>
            </div>
            <h5>{selectedWatch.watchMark}</h5>
            <h6>{selectedWatch.watchName}</h6>

            <div className="prices">
              {selectedWatch.oldPrice ? (
                <p className="old-price">{selectedWatch.oldPrice}$</p>
              ) : (
                ""
              )}
              <p className="new-price">{selectedWatch.newPrice}$</p>
            </div>

            <div className="about">
              <p>
                As we all know that watchES is known for its elegant, unique,{" "}
                <br />
                stylish, rugged, and futuristic watches which are a powerhouse{" "}
                <br />
                of many unique and modernized features and functions. watchES{" "}
                <br />
                watches are designed by keeping in mind the needs of today’s{" "}
                <br />
                materialistic societies. watchES has introduced many of its
                series with advanced features and functions.
              </p>
            </div>

            <MyButton buttonText={"Add to Cart"} butonKlik={handleClick}/>
          </div>
          <div className="right-card">
            <img src={selectedWatch.watchImage} alt="" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Watch;
