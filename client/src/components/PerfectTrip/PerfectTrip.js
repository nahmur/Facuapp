import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './perfectTrip.css'
import imgFlecha from '../../img/circled-right-2.png'

export default class PerfectTrip extends Component {
    render() {
        return (
            <Link to="/cities/" className="containerPerfectTrip">
                <h3 style={{color: "black"}}>Find your perfect trip, designed by insiders who know and love their cities.</h3>
                <img src={imgFlecha} alt="IrA" className="imgFlecha"/>
            </Link>
        )
    }
}
