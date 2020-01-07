import React from "react";
import { geolocated } from "react-geolocated";
import MapContainer from "./MapContainer";

class Geolocator extends React.Component {
  render() {
    console.log(this.props.coords);
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <MapContainer coords={this.props.coords} />
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Geolocator);