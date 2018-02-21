import React from "react";
import {
  View,
  Text,
  // Button,
  StyleSheet,
  TouchableHighlight,
  Component,
  AsyncStorage
} from "react-native";
import { Button, Icon } from "native-base";
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.14

import RegisterView from "./RegisterView";
import LoginView from "./LoginView";
import ProtectedView from "./ProtectedView";
import Test from "./Test";

_handleLogOut = () => {
  AsyncStorage.removeItem("jwt");
  alert("You have been logged out.");
};

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={() => navigation.navigate("Register")}>
      <Text style={[styles.button, styles.blueButton]}>Register</Text>
    </TouchableHighlight>
    <Button transparent>
      <Icon name="menu" />
    </Button>
    <TouchableHighlight onPress={() => navigation.navigate("Login")}>
      <Text style={[styles.button, styles.greenButton]}>Log Out Yeah</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this._handleLogOut}>
      <Text style={[styles.button, styles.greyButton]}>Log Out</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => navigation.navigate("Protected")}>
      <Text style={[styles.button, styles.redButton]}>Protected Content</Text>
    </TouchableHighlight>
  </View>
);

const RegisterScreen = () => <RegisterApp />;

const LoginScreen = () => <LoginApp />;

const ProtectedScreen = () => <ProtectedApp />;

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Welcome to SpeedHackApp"
    }
  },

  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: "Register"
    }
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Login"
    }
  },

  Protected: {
    screen: ProtectedScreen,
    navigationOptions: {
      headerTitle: "Protected"
    }
  }
});

const RegisterApp = StackNavigator(
  {
    Register: { screen: RegisterView }
  },
  {
    headerMode: "none"
  }
);

const LoginApp = StackNavigator(
  {
    Login: { screen: LoginView }
  },
  {
    headerMode: "none"
  }
);

const ProtectedApp = StackNavigator(
  {
    Protected: { screen: ProtectedView }
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
