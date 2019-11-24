import React, { Component } from "react";
import { Link } from "react-router-dom";

// IMG
import profile from "../../img/profile.png";
import menu from "../../img/menu.png";
import closeMenu from "../../img/closeMenu.png";

// STYLE
import "./header.css";

export default class Header extends Component {
  state = {
    expandLogin: false,
    expandMenu: false
  };
  render() {
    const { expandLogin, expandMenu } = this.state;
    return (
      <div className="header">
        <img
          src={profile}
          alt="profile"
          className="imageProfile"
          onClick={() =>
            this.setState({ expandLogin: !expandLogin, expandMenu: false })
          }
        />
        {!expandMenu ? (
          <img
            src={menu}
            alt="menu"
            className="imageMenu"
            onClick={() =>
              this.setState({ expandLogin: false, expandMenu: !expandMenu })
            }
          />
        ) : (
          <img
            src={closeMenu}
            alt="menu"
            className="closeMenu"
            onClick={() =>
              this.setState({ expandLogin: false, expandMenu: !expandMenu })
            }
          />
        )}

        {expandLogin && (
          <div className="containerExpandLogin">
            <ul>
              <li>
                <Link to="/createaccount" className="linkMenu">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="linkMenu">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        )}
        {expandMenu && (
          <div className="containerMenu">
            <ul>
              <li>
                <Link to="/cities" className="linkMenu">
                  Cities
                </Link>
              </li>
              <li>
                <Link to="/restaurant" className="linkMenu">
                  Restaurant
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
