import React from "react";
import "./Section.css";
import Lottie from "lottie-react";
import humidity from "./humidity.json";
import Loading from "./Loading.json";
import Preasure from "./Preasure.json";
import temprature from "./temprature.json";
import temperature2 from "./temperature2.json";
import tempM from "./tempM.json";

/*import dayjs from "dayjs"; */

export default function Section({ weather, reloading }) {
  return (
    <>
      {reloading ? (
        <>
          <div className="container-fluid col-md-7  Appp">
            <div className=" justify-content-between">
              <div className="  sec-f my-4 d-flex align-items-center  ">
                <>
                  <div className="container-fluid mx-1 ">
                    {/* section item start */}
                    <div
                      className="d-flex align-items-center
             text-center mb-4">
                      <div>
                        <Lottie
                          animationData={humidity}
                          className="anmii-f img-fluid"
                        />
                      </div>
                      <div className="textt-f">
                        Humidity
                        <div className="textt-s">
                          {weather.list[1].main.humidity} %
                        </div>
                      </div>
                    </div>
                    {/* section item end */}

                    <div
                      className="d-flex align-items-center
             text-center mb-4 ">
                      <div>
                        <Lottie
                          animationData={Loading}
                          className="anmii-f img-fluid"
                        />
                      </div>
                      <div className="textt-f">
                        Feel-l
                        <div className="textt-s">
                          {weather.list[1].main.feels_like}°C
                        </div>
                      </div>
                    </div>

                    <div
                      className="d-flex align-items-center
             text-center ">
                      <div>
                        <Lottie
                          animationData={Preasure}
                          className="anmii-f img-fluid"
                        />
                      </div>
                      <div className="textt-f">
                        Pressure
                        <div className="textt-s">
                          {weather.list[1].main.pressure}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid mx-1 ">
                    <div className="d-flex align-items-center text-center mb-4 ">
                      <div>
                        <Lottie
                          animationData={temprature}
                          className="anmii-f img-fluid"
                        />
                      </div>
                      <div className="textt-f">
                        Max-temp
                        <div className="textt-s">
                          {weather.list[1].main.temp_max}°C
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center text-center mb-4">
                      <div>
                        <Lottie
                          animationData={temperature2}
                          className="anmii-f img-fluid"
                        />
                      </div>
                      <div className="textt-f">
                        Min-temp
                        <div className="textt-s">
                          {weather.list[1].main.temp_min}°C
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center text-center ">
                      <div>
                        <Lottie
                          animationData={tempM}
                          className="anmii-f img-fluid"
                        />
                      </div>
                      <div className="textt-f">
                        Temp
                        <div className="textt-s">
                          {weather.list[1].main.temp}°C
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>

              <div className=" sec-s mb-5 ">
                {/* <div className="textt-t ">
            
               <p className="text-decoration-line-through ">Soon</p>
            </h1>  */}
                {/*  <Lottie animationData={working} className="anmii-s  " /> */}
                <div className="textt-ft">Tomorrow Forecast</div>
                <hr />
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <div>
                    <div className="textt-st">
                      {weather.list[8].weather[0].main}
                    </div>
                    <div className="textt-sh">
                      {weather.list[8].main.temp}°C
                    </div>
                    <div className="textt-et">{weather.city.name}</div>
                  </div>

                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.list[8].weather[0].icon}@2x.png`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  <div className="sec-t col-lg-6 ">
              <div className="textt-t ">
                <div className="texxtt-s">
           Daily/Hourly Forecast
               <div className="text-decoration-line-through ">Soon</div>
              </div>
              <div>
                <Lottie animationData={working} className="anmii-s  " />
                </div>
                </div> 
                </div>*/}
        </>
      ) : (
        <div>{null}</div>
      )}
    </>
  );
}
