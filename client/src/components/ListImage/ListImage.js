import React, { Component } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./listImage.css";

import barcelona from "../../img/cities/barcelona.jpg";
import newyork from "../../img/cities/newyork.jpg";
import amsterdam from "../../img/cities/amsterdam.jpg";
import paris from "../../img/cities/paris.jpg";

import buenosaires from "../../img/cities/buenosaires.jpg";
import dubai from "../../img/cities/dubai.jpg";
import madrid from "../../img/cities/madrid.jpg";
import mexico from "../../img/cities/mexico.jpg";

export default class ListImage extends Component {
  state = {
    carousel: 0
  };
  
  render() {
    const { carousel } = this.state;

    return (
      <div className="containerListImage">
        <h2 style={{marginLeft: "10px"}}>Popular MYtineraries</h2>
        {carousel === 0 ? (
          <div className="listaDeImagenes">
            <img src={barcelona} alt="barcelona" />
            <img src={newyork} alt="newyork" />
            <img src={amsterdam} alt="amsterdam" />
            <img src={paris} alt="paris" />
          </div>
        ) : (
          <div className="listaDeImagenes">
            <img src={buenosaires} alt="buenosaires" />
            <img src={dubai} alt="dubai" />
            <img src={madrid} alt="madrid" />
            <img src={mexico} alt="mexico" />
          </div>
        )}
        <div className="containerButtonsCarousel">
          <div className="borderButton">
            <FaAngleLeft
              size="38"
              color="white"
              onClick={() =>
                this.setState({ carousel: carousel === 0 ? 1 : 0 })
              }
            />
          </div>
          <p>{this.state.carousel}</p>
          <div className="borderButton">
            <FaAngleRight
              size="38"
              color="white"
              onClick={() =>
                this.setState({ carousel: carousel === 1 ? 0 : 1 })
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
