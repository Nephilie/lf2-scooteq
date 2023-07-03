import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
        style={{height: "80px"}}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/#">
            <strong>SCOOTEQ</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="/about">
                About Us
              </a>
              <a class="nav-link" href="/vehicles">
                Vehicles
              </a>
              <a class="nav-link" href="/features">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
