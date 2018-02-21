import React from "react";
import { StyleSheet, Text, View, Component, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./client/views/Home/HomeScreen";

export default class App extends React.Component {
  render() {
    //const { navigate } = this.props.navigation;
    return <SpeedHackApp />;
  }
}

const SpeedHackApp = StackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    headerMode: "none"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
