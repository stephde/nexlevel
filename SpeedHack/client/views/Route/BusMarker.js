import React from "react";
import { MapView } from "expo";
import Bus from "./bus.png";

const DIFFERENCE = 0.0001 * 2;

export default class BusMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      latitude: props.coordinates[0].latitude,
      longitude: props.coordinates[0].longitude,
      coordinates: props.coordinates
    };
    this.interval = setInterval(this.updateBusLocation, 1000);
  }
  updateBusLocation = () => {
    if (this.state.index > this.state.coordinates.length) {
      clearInterval(this.interval);
      return;
    }
    const index = this.state.index;
    const latDifference =
      this.state.latitude - this.state.coordinates[index].latitude;
    const longDifference =
      this.state.longitude - this.state.coordinates[index].longitude;
    if (Math.abs(DIFFERENCE) > DIFFERENCE) {
    } else {
    }
    // console.log(latDifference);
    // console.log(longDifference);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.coordinates !== nextProps.coordinates) {
      this.setState({
        coordinates: nextProps.coordinates,
        index: 1,
        latitude: nextProps.coordinates[0].latitude,
        longitude: nextProps.coordinates[0].longitude
      });
      if (this.interval) clearInterval(this.interval);
      this.interval = setInterval(this.updateBusLocation, 1000);
    }
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  render() {
    return (
      <MapView.Marker
        coordinate={{
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }}
        image={Bus}
      />
    );
  }
}
