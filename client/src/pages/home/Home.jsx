import React, { useEffect, useState } from "react";
import saatImage1 from "../../assets/images/saat5.jpg";
import saatImage2 from "../../assets/images/saat6.jpg";
import saatImage4 from "../../assets/images/saat4.jpg";
import "./home.scss";
import MyButton from "../../components/button/MyButton";
import WatchCard from "../../components/watchcard/WatchCard";
import { useNavigate } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
// swiper end

import watchWall2 from "../../assets/images/katy.jpg";
import watchWall3 from "../../assets/images/thor.jpg";
import watchWall4 from "../../assets/images/www.jpg";

const Home = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const showWatches = async () => {
    try {
      const response = await fetch(
        "http://localhost:7700/watches/get-all-watches",
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("there is some problem");
      }
      const data = await response.json();
      setWatches(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showWatches();
  }, []);

  return (
    <section className="home">
      <div className="thefirst-section">
        <div className="left-side">
          <div className="about-product">
            <h2>LIGHTNESS AND PERFORMANCE</h2>
            <p>
              Since the laws of hydraulics state that a liquid cannot be
              compressed, the oil will compensate for underwater pressure.
              Moreover there are other advantages related to the oil technology.
            </p>

            <MyButton
              buttonText={"LEARN MORE"}
              butonKlik={() => navigate("/watches")}
            />
          </div>
        </div>

        <div className="right-side">
          <img src={saatImage1} alt="" />
        </div>
      </div>

      <div className="thesecond-section">
        <div className="left-side">
          <img src={saatImage4} alt="watch image" />
        </div>

        <div className="right-side">
          <div className="about-product">
            <h2>
              This is a <span>FIRST IMPRESSIONS</span>
            </h2>
            <p>
              They are always saying "Look Sharp". And we took that seriously.
            </p>
          </div>
        </div>
      </div>

      <div className="thethird-section">
        <h1>
          Our <span>New Watches</span>
        </h1>
        <div className="new-watches">
          <Swiper
            style={{ userSelect: "none" }}
            slidesPerView={3}
            spaceBetween={140}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            breakpoints={{
              324: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            
          >
            {watches
              .slice()
              .reverse()
              .slice(0, 6)
              .map((item) => (
                <SwiperSlide
                  key={item._id}
                  style={{
                    width: "fit-content",
                    marginRight: 0,
                  }}
                >
                  <WatchCard key={item._id} item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      <div className="theforth-section">
        <div className="images-box">
          <img src={watchWall2} alt="" className="kate" />

          <img src={watchWall3} alt="" className="thor" />
          <img src={watchWall4} alt="" className="dior" />
        </div>
      </div>
    </section>
  );
};

export default Home;
