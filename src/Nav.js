import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if(window.scrollY > 100) {
              handleShow(true);
          }
          else handleShow(false);
      });
      return () => {
          window.removeEventListener("scroll");
      };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        class="nav_logo"
        src="./netflix.png"
        alt="Netflix Logo"
      />
      <img
        class="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
