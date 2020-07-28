import React from "react";

export default function Navbar() {
  return (
    <div className="d-block">
      <nav className="navbar navbar-expand-md navbar-dark" id="banner">
        <a className="navbar-brand" href="login.html">
          <img src="dependencies/img/ssr-logo1.png" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </a>
      </nav>
    </div>
  );
}
