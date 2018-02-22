import React from "react";
import PropTypes from "prop-types";
import RandomColor from "randomcolor";
import { Polyline } from "react-google-maps";

export default class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      color: RandomColor("bright", 1)
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        opacity: Math.max(this.state.opacity - 0.02, 0)
      });
    }, 200);
  }

  render() {
    return (
      <Polyline
        path={this.props.points.map(
          point => new window.google.maps.LatLng(point)
        )}
        options={{
          strokeColor: this.state.color,
          strokeOpacity: this.state.opacity
        }}
      />
    );
  }
}

Route.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  )
};
