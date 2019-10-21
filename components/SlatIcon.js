import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
// https://github.com/expo/expo/issues/423

import Icon from './Icon';
import {
  COLOR_CATEGORY_ICON,
  SLAT_HEIGHT,
  ICON_SIZE,
} from '../constants';

const _getWidth = reduce => Math.floor(SLAT_HEIGHT * (reduce ? 0.7 : 1));

const SlatIcon = ({icon, reduceWidth}) => (
  <View style={{
    ...styles.iconWrap,
    width: _getWidth(reduceWidth),
  }}>
    <Icon icon={icon} size={ICON_SIZE} color={COLOR_CATEGORY_ICON} />
  </View>
);

export default SlatIcon;

const styles = StyleSheet.create({
  iconWrap: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});
