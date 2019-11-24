import React, { Component } from "react";
import logo from '../../img/MYtineraryLogo.png'
import './logoCenter.css'
// import { MdRestaurant, MdAirplanemodeActive, MdMusicNote, MdTrain } from "react-icons/md";

export default class LogoCenter extends Component {
  render() {
    return (
      <div className="containerLogo">
        <img src={logo} alt="logo" className="imageLogo"/>
      </div>
    //   <div className="containerOptionsIcons">
    //     <div className="optionsCircle">
    //       <MdMusicNote size="40" />
    //     </div>
    //     <div className="optionsCircle">
    //       <MdAirplanemodeActive size="40" />
    //     </div>
    //     <div className="optionsCircle">
    //       <MdRestaurant size="40" />
    //     </div>
    //     <div className="optionsCircle">
    //       <MdTrain size="40" />
    //     </div>
    //   </div>
    );
  }
}
