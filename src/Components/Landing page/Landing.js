import React from "react";
import "./Landing.css";
import myimgf from "./myimgf.png";
import myimgs from "./myimgs.png";
import myimgt from "./myimgt.png";
import Lottie from "lottie-react";
import snowfall from "./snowfall.json";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <>
      <div className="container-fluid la-img mb-5">
        <div className="container d-sm-flex justify-content-between align-items-center mx-0">
          <div className="first-d mx-4 my-4 position-relative">
            <div className="lacont-f">
              <h1 className="lafirst-h px-4">
                <span className="weath-t">Weather </span>&{" "}
                <span className="weath-s">Forecast</span> website
              </h1>
            </div>
            <div className="div-f">
              <span className="span-f">Weather App </span>has local and
              international weather forecasts from the most accurate weather
              forecasting technology featuring up to the daily weather reports.
            </div>
            <Link to="/body">
              <button className="my-btn ">Discover</button>
            </Link>
            <Lottie
              animationData={snowfall}
              className="snofall position-absolute top-0 start-0"
            />
          </div>
          <div className="second-d mx-4">
            <div className="myimg">
              <img src={myimgf} className="myimgf" alt=""></img>
              <img src={myimgs} className="myimgs" alt=""></img>
              <img src={myimgt} className="myimgt" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
