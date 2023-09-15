import React from "react";

const NavBar = () => {
  return (
    <div>
      {
        <nav id="myNav" className="nav-overlay">
          <a href="" className="nav-closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="nav-overlay-content">
            <a onClick={()=>document.getElementById('introduction')}>Introduction</a>
            <a id="ourWork">Our Work</a>
            <a id="portfolio">Portfolio</a>
            <a id="services">Services</a>
            <a id="contact">Contact</a>
          </div>
        </nav>
      }
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
        &#9776; LEGENDARY
      </span>
    </div>
  );
};
const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
};
const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
};
export default NavBar;
