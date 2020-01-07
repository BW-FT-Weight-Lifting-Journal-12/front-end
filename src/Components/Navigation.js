import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/WJ-Logo.png";
import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="nav">
        <img className="logo" src={Logo} alt="logo" />
        <div className="links">
        <Link to="/exercises" className="link-text">
          <p>Exercises</p>
        </Link>
        <Link to="/myexercises" className="link-text">
          <p>My List</p>
        </Link>
        <Link to="/" className="link-text">
          <p>Sign Out</p>
        </Link>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
