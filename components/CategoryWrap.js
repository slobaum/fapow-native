import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CategorySlat from './CategorySlat';
import {
  CATEGORY_DATA,
  CATEGORY_COLORS,
  SLAT_HEIGHT,
  COLOR_BACKGROUND,
  ITEM_SPACING,
} from '../constants';


const CategoryWrap = ({category, children}) => (
  <View style={{
    ...styles.wrap,
    borderLeftColor: CATEGORY_COLORS[category],
  }}>
    <View style={styles.slatBottom}>
      <CategorySlat {...{category, asHead: true}} />
    </View>
    {children}
  </View>
);

export default CategoryWrap;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    height: CATEGORY_DATA.length * SLAT_HEIGHT,
    borderLeftWidth: ITEM_SPACING * 2,
  },
  slatBottom: {
    borderBottomWidth: ITEM_SPACING,
    borderBottomColor: COLOR_BACKGROUND,
  },
});
