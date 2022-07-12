import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid ">
          <h1><a className="navbar-brand">Trello</a></h1>
          <form className="d-flex">
            <input
              className="form-control me-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
