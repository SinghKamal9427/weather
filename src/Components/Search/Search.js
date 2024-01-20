import React, { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";
import "./Search.css";

export default function Search(props) {
  const searchInput = useRef();
  return (
    <div>
      <div className=" d-flex align-items-center " role="search">
        <input
          type="search"
          className="form-control "
          value={props.search}
          placeholder="Search City Weather..."
          onChange={() => props.eventHandler(searchInput.current.value)}
          ref={searchInput}
        />
        <button onClick={props.searchWeather} className="mybtn-f">
          <RiSearch2Line />
        </button>
      </div>
    </div>
  );
}
