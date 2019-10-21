import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import CategoryWrap from './CategoryWrap';

const Facility = ({category}) => (
  <CategoryWrap {...{category}}>
    <Text>Facility Here</Text>
  </CategoryWrap>
);


const styles = StyleSheet.create({
  wrap: {
  }
});