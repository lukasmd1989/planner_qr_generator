import React, { Fragment } from "react";

export const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a aria-current="page" className="text-center" href="/">
            <h1 className="navbar-brand mb-0">Planner QR Code Maker</h1>
          </a>
        </div>
      </nav>
    </Fragment>
  );
};