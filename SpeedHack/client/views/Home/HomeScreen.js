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
import { StackNavigator } from "react-navigation"; // 1.0.0-beta.14

import RouteView from "../RegisterView";
import styles from "./styles";

const HomeScreen = ({ navigation }) => (
  <Container>
    <Content>
      <Form>
        <Item floatingLabel style={{ margin: "5%" }}>
          <Label>From</Label>
          <Input />
          <Icon active name="ios-bus-outline" />
        </Item>
      </Form>
      <Button
        onPress={() => navigation.navigate("Route")}
        block
        style={{ margin: "5%" }}
      >
        <Text>Go</Text>
      </Button>
    </Content>
  </Container>
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

export default RootNavigator;
