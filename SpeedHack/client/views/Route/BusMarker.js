import React from "react";
import { MapView } from "expo";
import Bus from "./bus.png";
const STEP_SIZE = 0.0001;
const MAX_DIFFERENCE = STEP_SIZE * 2;

export default class BusMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      latitude: props.coordinates[0].latitude,
      longitude: props.coordinates[0].longitude,
      coordinates: props.coordinates
    };
    this.interval = setInterval(this.updateBusLocation, 100);
  }
  updateBusLocation = () => {
    if (this.state.index >= this.state.coordinates.length) {
      clearInterval(this.interval);
      return;
    }
    const index = this.state.index;
    const latDifference =
      this.state.coordinates[index].latitude - this.state.latitude;
    const longDifference =
      this.state.coordinates[index].longitude - this.state.longitude;
    const totalDifference = Math.abs(latDifference) + Math.abs(longDifference);
    if (totalDifference > MAX_DIFFERENCE) {
      this.setState({
        latitude:
          this.state.latitude + STEP_SIZE * (latDifference / totalDifference),
        longitude:
          this.state.longitude + STEP_SIZE * (longDifference / totalDifference)
      });
    } else {
      this.setState({
        index: this.state.index + 1,
        latitude: this.state.coordinates[index].latitude,
        longitude: this.state.coordinates[index].longitude
      });
    }
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
      this.interval = setInterval(this.updateBusLocation, 100);
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
