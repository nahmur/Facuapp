import React, { Component } from "react";
import Header from "./Header/Header";
import LogoCenter from "./LogoCenter/LogoCenter";
import PerfectTrip from "./PerfectTrip/PerfectTrip";
import ListImage from "./ListImage/ListImage";
// import Footer from './Footer/Footer'

export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        <LogoCenter />
        <PerfectTrip />
        <ListImage />
      </>
    );
  }
}
