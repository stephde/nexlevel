import React from "react";
import { StyleSheet, Text, View, Component, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./client/views/Home/HomeScreen";
import * as Expo from "expo";
import { StyleProvider } from "native-base";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
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
