import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Constants} from 'expo';
import {Link} from "react-router-native";

export default class StartScreen extends Component {

  render() {
    const {match} = this.props;

    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/mars_01.png")}
        resizeMode="cover"
      >
        <Text style={styles.paragraph}>
          Click below to start this thing up!
        </Text>
        <Link to={`${match.url}play`}>
          <Text>Start</Text>
        </Link>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    width: '100%',
    height: '100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
