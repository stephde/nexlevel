import React from 'react';
import { Component, StyleSheet, Text, View, Image } from 'react-native';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Dude! Want some bananas?</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Test;
