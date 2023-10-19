import React from "react";
import "./watchcard.scss";
import { BsFillBagHeartFill } from "react-icons/bs";
import saatImage from "../../assets/images/saat6.jpg";

const WatchCard = ({item}) => {
  return (
    <div className="watch-card">
      <div className="new-or-not">New</div>

      <div className="like">
        <BsFillBagHeartFill />
      </div>
      <div className="card">
        <div className="image-side">
          <img src={item.watchImage} alt="" />
        </div>

        <div className="bottom-side">
          <div className="name-mark">
            <p className="mark">{item.watchMark}</p>
            <p className="name">{item.watchName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
