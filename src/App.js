import "./App.css";
import { useEffect, useState } from "react";
import Body from "./Components/Body/Body";
import Section from "./Components/Section/Section";
import axios from "axios";
import Search from "./Components/Search/Search";
import Lottie from "lottie-react";
import backBody from "./backBody.json";


function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [reloading, setReloading] = useState(false);
  const [erloading, setErloading] = useState(false);
  const [error, setError] = useState([]);

  const eventHandler = (value) => {
    setSearch(value);
  };

  const searchWeather = () => {
    if (search !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=0bdf74b828b9c7bd5b345bbdab24bbcf&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
          console.log(response.data);
          setReloading(true);
        })
        .catch((error) => {
          setError(error);
          console.log(error);
          setErloading(true);
        });
    }
  };
  useEffect(() => {
    setReloading(false);
  }, [error]);

  return (
    <div className="App  position-relative mt-5">
      <Lottie animationData={backBody} className="img-fluid backbody-f " />

      <div className="d-sm-flex align-items-center  position-absolute top-0 right-0 dhakka-s mt-auto">
        <div className="posi-f ">
          <Body
            weather={weather}
            reloading={reloading}
            erloading={erloading}
            error={error}
          />
          <div className="posi-s ">
            <Search
              search={search}
              eventHandler={eventHandler}
              searchWeather={searchWeather}
            />
          </div>
        </div>
        <div className="posi-t">
          <Section weather={weather} reloading={reloading} />
        </div>
      </div>
    </div>
  );
}

export default App;
