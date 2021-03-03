import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzM5ODUxZmQt/YzM5ODUxZmQt-YmQ4YjVhODYt-w1500._CB660426992_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={40.99}
            image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Kuccu Stand Mixer, 6 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Kitchen Electric Mixer with Stainless Steel Bowl,Dough Hook,Whisk, Beater, Egg white separator (6-QT, Silver-1)"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71hvYseFrlL._AC_SL1500_.jpg"
            rating={3}
          />
          {/*product*/}
          <Product
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminum Case with Black Sport Band"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            rating={2}
          />

          <Product
            title="Serta 43675 Big & Tall Executive Office Chair High Back All Day Comfort Ergonomic Lumbar Support, Bonded Leather, Black"
            price={100.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81xJoddGAXL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="SAMSUNG 32-inch Odyssey G7 – QHD 1000R Curved Gaming Monitor: 240hz,1ms, NVIDIA G-SYNC & FreeSync, QLED (LC32G75TQSNXZA) (Renewed)"
            price={40.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81V5FA5dIYL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
