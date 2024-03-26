import React from "react";
import Header from "../components/Layout/Header";
import Example from "../components/Layout/Example";
import Endpoint from "../components/Layout/Endpoint";
import PropTypes from "prop-types";
import Footer from "../components/Layout/Footer";

const Home = ({ id }) => {
  Home.propTypes = {
    id: PropTypes.any.isRequired,
  };
  return (
    <React.Fragment>
      <Header />
      <Endpoint id={id} />
      <Example id={id} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
