import React from "react";

import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { getRequestedLocations } from "../api";

export default class Heatmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.requests.length > this.props.requests.length) {
    const latLngArray = nextProps.requests
      .map(request =>
        // request.points.map(
        //   point =>
        //     new window.google.maps.LatLng({
        //       lat: point[0],
        //       lng: point[1]
        //     })
        // )
        [
          new window.google.maps.LatLng({
            lat: request.points[0][0],
            lng: request.points[0][1]
          }),
          new window.google.maps.LatLng({
            lat: request.points[request.points.length - 1][0],
            lng: request.points[request.points.length - 1][1]
          })
        ]
      )
      .reduce((prev, curr) => [...prev, ...curr], []);
    this.setState({
      data: latLngArray
    });
    // }
  }

  render() {
    console.log("Render Heatmap", this.state.data);
    return <HeatmapLayer data={this.state.data} />;
  }
}

Heatmap.defaultProps = {
  requests: []
};
