import React from "react";
import PropTypes from "prop-types";
import { MapView } from "expo";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.map) return;
    if (
      JSON.stringify(this.props.markers) !== JSON.stringify(nextProps.markers)
    ) {
      this.map.fitToCoordinates(
        nextProps.markers.map(marker => {
          return marker.coordinate;
        }),
        {
          edgePadding: {
            top: 60,
            right: 60,
            bottom: 60,
            left: 60
          },
          animated: true
        }
      );
    }
  }

  selectMarker(index) {
    this.map.animateToCoordinate(this.props.markers[index].coordinate, 100);
    this.props.selectMarker(index);
  }

  render() {
    return this.props.visible ? (
      <MapView
        ref={map => (this.map = map)}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }}
        initialRegion={{
          latitude: 52.518362,
          longitude: 13.396863,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {this.props.markers.map((marker, index) => (
          <MapView.Marker
            coordinate={marker.coordinate}
            title={marker.name}
            onPress={() => this.selectMarker(index)}
          />
        ))}
      </MapView>
    ) : null;
  }
}

Map.defaultProps = {
  markers: [],
  visible: true
};

Map.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }),
  visible: PropTypes.bool,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      coordinate: PropTypes.shape({
        latitudde: PropTypes.number,
        longitude: PropTypes.number
      })
    })
  )
};
