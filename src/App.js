import * as React from "react";
import { Helmet } from "react-helmet";

import { Navbar } from "../src/components/Navbar";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { UTMBuilder } from "../src/components/UTMBuilder";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>UTM Builder for Google Analytics</title>
          <meta content="Free URL builder to create UTM codes for all your Google Analytics campaign URLs" name="description"></meta>
          <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
        </Helmet>
      <Navbar />
      <Header />
      <UTMBuilder />
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;