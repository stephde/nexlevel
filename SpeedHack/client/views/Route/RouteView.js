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
      case "BUS":
        return `Go by bus with ${segment.name} :)`;
      case "WALK":
        return `Walk`;
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
            connectionSegments: json.connectionSegments
          })
        );
    }, 1000);
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        email: "",
        password: null
      }
    };
  }

  render() {
    const { isLoading, connectionSegments } = this.state;

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
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }}
              />
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
