import React from "react";
import "./aboutus.scss";
import image1 from "../../assets/images/about1.jpg";
import image2 from "../../assets/images/about2.jpg";

const Aboutus = () => {
  return (
    <section className="about-us">
      <h6>ABOUT US</h6>
      <h3>We personalize watches just for you.</h3>

      <div className="images-boxes">
        <div className="thefirst-box">
          <img src={image1} alt="" />

          <div className="secret-hover">
            <p>Italian Design Watches</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              quod exercitationem obcaecati.
            </span>
          </div>
        </div>

        <div className="thesecond-box">
          <img src={image2} alt="" />

          <div className="secret-hover">
            <p>Mechanical Watches</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              quod exercitationem obcaecati.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
