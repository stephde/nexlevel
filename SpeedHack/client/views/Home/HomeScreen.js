import React from "react";
import {
  Container,
  Input,
  Content,
  Form,
  Item,
  Label,
  Button,
  Text,
  Icon
} from "native-base";
import { Image, View } from "react-native";

import { StackNavigator } from "react-navigation"; // 1.0.0-beta.14

import RouteView from "../Route/RouteView";
import styles from "./styles";
import MapView from "./Map.js";
import { getPossibleLocations } from "../../api.js";

import busImage from "./bus.png";
import skyline from "./skyline.jpg";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      inputMode: false,
      selectedDestinationIndex: -1
    };
  }
  onChange(value) {
    getPossibleLocations(value).then(suggestions => {
      console.log(suggestions);
      this.setState({
        suggestions: suggestions.map(suggestion => {
          return {
            name: suggestion.label,
            coordinate: suggestion.coordinates
          };
        })
      });
    });
  }

  onFocus() {
    this.setState({
      inputMode: true
    });
  }

  findRoute() {
    if (this.state.selectedDestinationIndex > -1)
      this.props.navigation.navigate(
        "Route",
        this.state.suggestions[this.state.selectedDestinationIndex]
      );
  }

  onBlur() {
    // console.log("onBlure");
    // this.setState({
    //   inputMode: false
    // });
  }

  selectDestination(index) {
    this.setState({
      selectedDestinationIndex: index
    });
  }

  render() {
    return (
      <Container
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          style={{
            backgroundColor: "#ccc",
            resizeMode: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            justifyContent: "center"
          }}
          source={skyline}
        />
        <View
          style={{
            backgroundColor: "#fff",
            opacity: 0.6,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />

        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <MapView
            visible={this.state.inputMode}
            markers={this.state.suggestions}
            selectMarker={index => this.selectDestination(index)}
          />
          <View
            pointerEvents="none"
            style={{
              backgroundColor: "#fff",
              opacity: 0.6,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          />
          <Form>
            <Item floatingLabel style={{ margin: "5%" }}>
              <Label>Destination</Label>
              <Input
                onChangeText={value => this.onChange(value)}
                onFocus={() => this.onFocus()}
                onBlur={() => this.onBlur()}
              />
              <Icon active name="ios-bus-outline" />
            </Item>
          </Form>
          <View
            style={{
              width: "90%",
              margin: "5%",
              height: 70,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            {this.state.selectedDestinationIndex > -1 ? (
              <Button
                onPress={() => this.findRoute()}
                bordered
                style={{
                  borderRadius: 100,
                  width: 70,
                  height: 70
                }}
              >
                <Text style={{ textAlign: "center", width: "100%" }}>Go</Text>
              </Button>
            ) : null}
          </View>
        </Content>
      </Container>
    );
  }
}
const RouteScreen = () => <RouteApp />;

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Welcome to nexLevel Mobility",
      header: null
    }
  },
  Route: {
    screen: RouteScreen,
    navigationOptions: {
      headerTitle: "Your Route"
    }
  }
});

const RouteApp = StackNavigator(
  {
    Route: { screen: RouteView }
  },
  {
    headerMode: "none"
  }
);

export default RootNavigator;
