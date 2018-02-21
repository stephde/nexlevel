import React from "react";
import { MapView } from "expo";
import {
  Container,
  Content,
  // Text,
  Spinner,
  Card,
  CardItem,
  Body
} from "native-base";
import {
  Dimensions,
  Component,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from "react-native";
import BusMarker from "./BusMarker";

const { height, width } = Dimensions.get("window");

class RouteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      connectionSegments: []
    };
  }
  _generateHeadline(segment) {
    switch (segment.type) {
      case "Bus":
        return `Go by bus with ${segment.name} :)`;
      case "UBahn":
        return `Take the U-Bahn`;
      case "SBahn":
        return `Take the S-Bahn`;
      case "Walk":
        return `Walk`;
      default:
        return segment.type;
    }
  }
  _getTimeString({ h, min }) {
    const modMin =
      min.toString().length === 1 ? `0${min.toString()}` : min.toString();
    return `${h}:${modMin}`;
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://nexlevel-server.herokuapp.com/routing/mockdynamic")
        .then(response => response.json())
        .then(json =>
          this.setState({
            isLoading: false,
            connectionSegments: json.connectionSegments,
            bus: {}
          })
        );
    }, 1000);
  }

  render() {
    const { isLoading, connectionSegments } = this.state;
    const coordinates = [
      { latitude: 52.490396, longitude: 13.360399 },
      { latitude: 52.523374, longitude: 13.411157 },
      { latitude: 52.543443, longitude: 13.425288 }
    ];
    return (
      <Container>
        <Content>
          {isLoading ? (
            <Spinner />
          ) : (
            <View>
              {connectionSegments.map(segment => (
                <Card key={segment.name} transparent>
                  <CardItem header>
                    <Text>{`${segment.departureName} - ${
                      segment.arrivalName
                    }`}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>{this._generateHeadline(segment)}</Text>
                      <Text>{this._getTimeString(segment.departureTime)}</Text>
                      <Text>-</Text>
                      <Text>{this._getTimeString(segment.arrivalTime)}</Text>
                    </Body>
                  </CardItem>
                </Card>
              ))}
              <MapView
                style={{
                  width: width,
                  height: 250
                }}
                initialRegion={{
                  ...coordinates[0],
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
              >
                <MapView.Polyline
                  coordinates={coordinates}
                  strokeColor="#12D" // fallback for when `strokeColors` is not supported by the map-provider
                  strokeColors={["#7F0000", "#B24112", "#E5845C"]}
                  strokeWidth={2}
                  lineCap="butt"
                />
                {coordinates.map(coordinate => (
                  <MapView.Circle
                    center={coordinate}
                    radius={5}
                    fillColor="#12D"
                    strokeColor="#12D"
                    key={`${coordinate.latitude}-${coordinate.longitude}`}
                  />
                ))}
                <BusMarker
                  coordinates={[
                    { latitude: 52.485196, longitude: 13.355199 },
                    ...coordinates
                  ]}
                />
              </MapView>
            </View>
          )}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column"
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff"
  },
  greenButton: {
    backgroundColor: "#4CD964"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RouteView;
