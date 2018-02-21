import React from "react";
import {
  Container,
  Content,
  Text,
  Spinner,
  Card,
  CardItem,
  Body
} from "native-base";
import {
  Component,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";

const t = require("tcomb-form-native");

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
      this.setState({
        isLoading: false,
        connectionSegments: [
          {
            name: "Jacky",
            type: "BUS",
            departureTime: {
              h: 14,
              min: 2
            },
            departureName: "U-Bahnhof Bülowstraße",
            departureLocation: {
              latitude: "",
              longitute: ""
            },
            arrivalTime: {
              h: 14,
              min: 21
            },
            arrivalName: "Alexanderplatz",
            arrivalLocation: {
              latitude: "",
              longitute: ""
            }
          },
          {
            name: "Paul",
            type: "BUS",
            departureTime: {
              h: 14,
              min: 23
            },
            departureName: "Alexanderplatz",
            departureLocation: {
              latitude: "",
              longitute: ""
            },
            arrivalTime: {
              h: 14,
              min: 35
            },
            arrivalName: "Storkower Straße",
            arrivalLocation: {
              latitude: "",
              longitute: ""
            }
          }
        ]
      });
    }, 2000);
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
                <Card key={segment.name}>
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
