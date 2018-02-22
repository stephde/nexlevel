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

  componentDidMount() {
    // getRequestedLocations()
    //   .then(requests => {
    //     const latLngArray = requests.map(request => ({
    //       ...request,
    //       points: request.points.map(point => ({
    //         lat: point[0],
    //         lng: point[1]
    //       }))
    //     }));
    //     this.setState({
    //       routes: latLngArray
    //     });
    //   })
    //   .catch(error => console.log);
  }

  render() {
    console.log("render routes", this.state.routes);
    return this.state.routes.map((route, index) => (
      <Route key={index} points={route.points} />
    ));
  }
}
