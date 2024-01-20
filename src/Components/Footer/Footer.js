import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start myfoot-f">
        <div className="text-center p-3 footer-f">
          © 2023 Copyright:
          <a
            className="text-dark link-f"
            href="https://kamaldsingh.netlify.app/">
            Kamaldsingh.netlify
          </a>
        </div>
      </footer>
    </div>
  );
}
