import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Link} from "react-router-native";
// https://github.com/expo/expo/issues/423

import SlatIcon from './SlatIcon';
import {
  CATEGORY_DATA,
  CATEGORY_ICONS,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  COLOR_CATEGORY_ICON,
  SLAT_HEIGHT,
  COLOR_BACKGROUND,
  ICON_SIZE,
} from '../constants';

const CategoryWrap = ({asHead, ...props}) => asHead
  ? <View {...props} />
  : <Link {...props} />;

const CategorySlat = ({category, activeCategory, asHead}) => (
    <CategoryWrap
      to={activeCategory === category ? '/play/' : `/play/${category}`}
      style={{backgroundColor: CATEGORY_COLORS[category]}}
      asHead={asHead}
    >
      <View style={{
        ...styles.slat,
        height: Math.floor(asHead ? SLAT_HEIGHT*.75 : SLAT_HEIGHT),
      }}>
        <SlatIcon
          icon={activeCategory !== category ? CATEGORY_ICONS[category] : 'feather.x'}
          reduceWidth={asHead}
        /> 
        {!activeCategory && (
          <Text style={{
            fontSize: asHead ? 18 : 14,
            color: asHead ? 'rgba(255, 255, 255, 0.3)' : 'white',
          }}>
            {CATEGORY_LABELS[category]}
          </Text>
        )}
      </View>
    </CategoryWrap>
);
/*ionicons.md-arrow-round-back*/

export default CategorySlat;

const styles = StyleSheet.create({
  slat: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLOR_BACKGROUND,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
