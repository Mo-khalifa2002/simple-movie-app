import React from "react";
import user from "../assets/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
            <a class="navbar-brand fw-bold text-light text-capitalize">
              Mo-khalifa
            </a>
          {/* </Link> */}
          <div className="navbar-brand">
            <img src={user} alt="user" width="30" height="30" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
