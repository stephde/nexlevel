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

import busImage from "./bus.png";
import skyline from "./skyline.jpg";

const HomeScreen = ({ navigation }) => (
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
        opacity: 0.7,
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
      <Form>
        <Item floatingLabel style={{ margin: "5%" }}>
          <Label>From</Label>
          <Input />
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
        <Button
          onPress={() => navigation.navigate("Route")}
          bordered
          style={{
            borderRadius: 100,
            width: 70,
            height: 70
          }}
        >
          <Text style={{ textAlign: "center", width: "100%" }}>Go</Text>
        </Button>
      </View>
    </Content>
  </Container>
);

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

export default RootNavigator;
