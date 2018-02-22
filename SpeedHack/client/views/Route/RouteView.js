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
  View,
  Image
} from "react-native";
import BusMarker from "./BusMarker";
import Bus from "./bus.png";
import SBahn from "./underground.png";
import Underground from "./metro.png";

const { height, width } = Dimensions.get("window");

class RouteView extends React.Component {
  constructor(props) {
    super(props);
    this.destination = this.props.navigation.state.params;
    this.state = {
      isLoading: true,
      connectionSegments: []
    };
  }

  _getHeadlineImage(segment) {
    switch (segment.type) {
      case "Bus":
        return Bus;
      case "UBahn":
        return Underground;
      case "SBahn":
        return SBahn;
      case "railRegional":
      case "trainRegional":
        return SBahn;
      case "Walk":
        return Underground;
      default:
        return Underground;
    }
  }

  _generateHeadline(segment) {
    switch (segment.type) {
      case "Bus":
        return `Look for the bus "${segment.name}"`;
      case "UBahn":
        return `Take the U-Bahn`;
      case "SBahn":
      case "railRegional":
        return `Take the S-Bahn`;
      case "trainRegional":
        return "Take the Regio";
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
      const destination = this.destination.coordinate;
      const name = this.destination.name;
      fetch(
        `https://inquisitive-witness.glitch.me/routing/mockdynamic?origin=[52.4989379,13.3747849]&destination=${`[${
          destination.latitude
        },${destination.longitude}]`}&destName=${name}`
      )
        .then(response => response.json())
        .then(json =>
          this.setState({
            isLoading: false,
            connectionSegments: json.connectionSegments,
            bus: {}
          })
        )
        .catch(e => console.error(e));
    }, 1000);
  }

  render() {
    const { isLoading, connectionSegments } = this.state;
    const coordinates =
      connectionSegments && connectionSegments.length >= 1
        ? [
            ...connectionSegments.map(segment => segment.departureLocation),
            connectionSegments[connectionSegments.length - 1].arrivalLocation
          ]
        : [];
    return (
      <Container>
        <Content>
          {isLoading ? (
            <Spinner color="blue" />
          ) : (
            <View style={styles.container}>
              {connectionSegments.map(segment => (
                <Card key={segment.name}>
                  <CardItem header>
                    <Image
                      style={{
                        resizeMode: "cover",
                        marginRight: 10,
                        width: 32,
                        height: 32,
                        justifyContent: "center"
                      }}
                      source={this._getHeadlineImage(segment)}
                    />
                    <Text style={styles.headline}>{`${
                      segment.departureName
                    } - ${segment.arrivalName}`}</Text>
                  </CardItem>
                  <CardItem
                    style={
                      segment.type === "Bus"
                        ? styles.highlightedContent
                        : styles.regularContent
                    }
                  >
                    <Body>
                      <Text style={styles.headline}>
                        {this._generateHeadline(segment)}
                      </Text>
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
    flex: 1,
    backgroundColor: "#DDD"
  },
  regularContent: {
    backgroundColor: "#F5F5F5"
  },
  highlightedContent: {
    backgroundColor: "#FAFAFF"
  },
  headline: {
    fontWeight: "bold"
  }
});
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     flexDirection: "column"
//   },
//   button: {
//     borderRadius: 4,
//     padding: 20,
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#fff"
//   },
//   greenButton: {
//     backgroundColor: "#4CD964"
//   },
//   centering: {
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

export default RouteView;
