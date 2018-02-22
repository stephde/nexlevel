import React from "react";
import Route from "./Route";

import { getRequestedLocations } from "../api";

export default class Connections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const latLngArray = nextProps.requests.map(request => ({
      ...request,
      // points: request.points.map(point => ({
      //   lat: point[0],
      //   lng: point[1]
      // }))
      points: [
        {
          lat: request.points[0][0],
          lng: request.points[0][1]
        },
        {
          lat: request.points[request.points.length - 1][0],
          lng: request.points[request.points.length - 1][1]
        }
      ]
    }));
    this.setState({
      routes: latLngArray
    });
  }

  render() {
    console.log("render routes", this.state.routes);
    return this.state.routes.map((route, index) => (
      <Route key={index} points={route.points} />
    ));
  }
}
