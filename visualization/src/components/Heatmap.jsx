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

  componentDidMount() {
    getRequestedLocations()
      .then(requests => {
        const latLngArray = requests.map(
          request =>
            new window.google.maps.LatLng({
              lat: request.from[0],
              lng: request.from[1]
            })
        );
        console.log(latLngArray);
        this.setState({
          data: latLngArray
        });
      })
      .catch(error => console.log);
  }

  render() {
    console.log("Render Heatmap", this.state.data);
    return <HeatmapLayer data={this.state.data} />;
  }
}
