import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  Component,
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.14

import RouteView from "./RegisterView";
import Test from "./Test";

_handleLogOut = () => {
  AsyncStorage.removeItem("jwt");
  alert("You have been logged out.");
};

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={() => navigation.navigate("Route")}>
      <Text style={[styles.button, styles.blueButton]}>Go</Text>
    </TouchableHighlight>
  </View>
);

const RouteScreen = () => <RouteApp />;

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Welcome to nexLevel Mobility"
    }
  },
  Route: {
    screen: RouteScreen,
    navigationOptions: {
      headerTitle: "Login"
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

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 80,
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
  blueButton: {
    backgroundColor: "#34AADC"
  },
  redButton: {
    backgroundColor: "#FF3B30",
    color: "#fff"
  },
  greyButton: {
    backgroundColor: "#777",
    color: "#fff"
  }
});

export default RootNavigator;
