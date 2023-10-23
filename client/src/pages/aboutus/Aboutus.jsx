import React from "react";
import "./aboutus.scss";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiSandsOfTime } from "react-icons/gi";
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

      <div className="partners">
        <p>OUR VALUABLE</p>
        <h5>Worldwide Partner</h5>
        <div className="partners-logos">
          <img src="https://chrono-dial.myshopify.com/cdn/shop/files/logo11.png?v=1613163436&width=1500" alt="logo" />
          <img src="https://chrono-dial.myshopify.com/cdn/shop/files/logo10.png?v=1613163436&width=1500" alt="logo" />
          <img src="https://chrono-dial.myshopify.com/cdn/shop/files/logo6.png?v=1613163436&width=1500" alt="logo" />
          <img src="https://chrono-dial.myshopify.com/cdn/shop/files/logo5.png?v=1613163436&width=1500" alt="logo" />
          <img src="https://chrono-dial.myshopify.com/cdn/shop/files/logo8.png?v=1613163436&width=1500" alt="logo" />
        </div>
      </div>

      <div className="thesecond-section">
        <div className="content">
          <p>BRANDED & LONGLISTING</p>
          <h5>Affordable watch</h5>
          <span>Modern and best portable timepiece</span>
        </div>
        <div className="thefirstside">
          <div className="qutu">
            <img
              src="https://chrono-dial.myshopify.com/cdn/shop/files/abo-03_c2323bc5-38b9-4403-b14f-d431ad53d2fd.jpg?v=1621591152&width=1500"
              alt=""
            />
            <div className="qutu-back"></div>
          </div>

          <div className="text">
            <HiOutlineLightBulb className="icon" />
            <p>Timeless watches to fit your style</p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Repellat, aliquam. Laudantium, esse. Magni, aperiam optio <br />
              accusamus, incidunt veritatis excepturi laborum voluptatem ex sit
              maxime error.
            </span>
          </div>
        </div>

        <div className="thesecondside">
          <div className="text">
            <GiSandsOfTime className="icon" />
            <p>A lot more luxury watches</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos{" "}
              <br />
              provident at officia ipsam, consequuntur laborum ipsa, in et non{" "}
              <br />
              iure similique! Quibusdam recusandae officiis iusto?
            </span>
          </div>
          <div className="qutu">
            <img
              src="https://chrono-dial.myshopify.com/cdn/shop/files/abo-04.jpg?v=1621591177&width=1500"
              alt=""
            />
            <div className="qutu-back"></div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Aboutus;
