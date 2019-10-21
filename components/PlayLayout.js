import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {Constants} from 'expo';
import {Link, Route} from "react-router-native";

import CategorySlat from './CategorySlat';
import {
  CATEGORY_DATA,
  SLAT_HEIGHT,
  COLOR_BACKGROUND
} from '../constants';

export default class PlayLayout extends Component {

  render() {
    const {
      match,
      children
    } = this.props;
    const {params: {category}} = match;

    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/mars_02.jpg")}
        resizeMode="cover"
      >
        <View style={styles.contentArea}>
          <View style={{
            ...styles.slats,
            ...(category ? styles.slatsNarrow : {})
          }}>
            {CATEGORY_DATA.map(data => (
              <CategorySlat
                text={data.label}
                category={data.category}
                activeCategory={category}
              />
            ))}
          </View>
          {children}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: COLOR_BACKGROUND,
    width: '100%',
  },
  contentArea: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  slats: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#111',
  },
  slatsNarrow: {
    width: SLAT_HEIGHT,
    flex: 0,
  },
});
