import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/WJ-Logo.png";
import "../App.css";

const Navigation = () => {
  return (
    <div className="nav">
      <img className="logo" src={Logo} alt="logo" />
      <Link to="/exercises" className="link-text">
        <p>Exercises</p>
      </Link>
      <Link to="/myexercises" className="link-text">
        <p>My List</p>
      </Link>
      <Link to="/welcome" className="link-text">
        <p>Sign Out</p>
      </Link>
    </div>
  );
};

export default Navigation;
