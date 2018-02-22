import React from "react";
import PropTypes from "prop-types";

import { Polyline } from "react-google-maps";

export default class Route extends React.Component {
  render() {
    return (
      <Polyline
        path={this.props.points.map(
          point => new window.google.maps.LatLng(point)
        )}
      />
    );
  }
}

Route.PropTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  )
};
