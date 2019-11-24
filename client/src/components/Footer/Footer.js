import React, { Component } from 'react'
import { Link } from "react-router-dom";

import imageHome from '../../img/homeIcon.png'

import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="containerFooter">
                <Link to="/"><img src={imageHome} alt="Home"/></Link>
            </div>
        )
    }
}
