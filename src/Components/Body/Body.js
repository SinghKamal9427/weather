import React from "react";
import "./Body.css";
import temp from "./temp.json";
import Lottie from "lottie-react";
import wind from "./wind.json";
import Newp from "./Newp.json";
import background from "./background.json";
import errorp from "./errorp.json";

export default function Body({ weather, reloading, erloading, error }) {
  return (
    <div className="container-fluid contt-f">
      <div className="loc-f  ">
        {reloading ? (
          <div>
            <div className="loca-f">{weather.city.name}</div>'
            {weather.city.country}
            <div>
              {
                <img
                  src={`https://openweathermap.org/img/wn/${weather.list[1].weather[0].icon}@2x.png`}
                  alt=""
                />
              }
              <div className="discr-f">
                {weather.list[1].weather[0].description}
              </div>
              <hr />

              <div className="d-flex justify-content-center align-items-center">
                <Lottie animationData={temp} className="img-fluid wind-f " />
                <div className="wind-t">
                  Temp
                  <p className="wind-s">{weather.list[1].main.temp}°C</p>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <Lottie animationData={wind} className="img-fluid wind-f " />
                <div className="wind-t">
                  Wind
                  <p className="wind-s">{weather.list[1].wind.speed} kmph</p>
                </div>
              </div>
              <div className="updt-t">
                last Updated on
                <p className="updt-s">{weather.list[1].dt_txt}</p>
              </div>
            </div>
            <Lottie
              animationData={background}
              className="backg-f position-absolute top-0 start-0"
            />
          </div>
        ) : (
          <div>
            {erloading ? (
              <>
                <Lottie animationData={errorp} className="error-f" />
                {error.response.data.message}
              </>
            ) : (
              <>
                <Lottie animationData={Newp} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
