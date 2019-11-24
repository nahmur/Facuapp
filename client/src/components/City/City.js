import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { connect } from "react-redux";
import { getCity } from "../../store/actions/cityActions";

//Components
import Header from "../Header/Header";

import "./city.css";

class City extends Component {
  constructor(){
    super();
  }
  state = {
    city: {},
    loading: true
  };

  async componentDidMount() {
    await this.props.getOne(this.props.match.params.id);
    await this.setState({
      city: this.props.data.citiesReducer.city || {},
      loading: false
    });
  }
  
  render() {
    return (
      <>
        <Header />
        {this.state.loading ? (
          "Cargando..."
        ) : (
          <div className="containerImageCity">
            <img src={this.state.city.url} alt={this.state.city.name} />
            <div className="containerInfoCity">
              <h2>{this.state.city.country}</h2>
              <h3>{this.state.city.name}</h3>
            </div>
          </div>
        )}
        <div className="buttonBack">
          <Link to="/cities/" className="buttonBack">
            <IoMdArrowRoundBack />
            Back
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("map state", state);
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOne: (id) => dispatch(getCity(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);