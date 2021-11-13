import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () => {
  const { user } = useAuth0();

  return <Fragment>
    {
      user !== undefined && !user.email_verified &&  <h1 style={{
        color: "red",
        textAlign: "center"
    }}>Please verify your email</h1> 
  }
  <Hero />
  <hr />
  <Content />
  </Fragment>
}

export default Home;