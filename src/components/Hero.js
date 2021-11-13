import React from "react";

import logo from "../assets/CruiseLogo.svg";


const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Cruise logo" width="120" />
    <h1 className="mb-4">Cruise0</h1>
    <h1 className="mb-4">Welcome Aboard</h1>

    <p className="lead">
      Book your next getaway with us!
    </p>
  </div>
);







export default Hero;
