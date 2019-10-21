import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import CategorySlat from './CategorySlat';
import CategoryWrap from './CategoryWrap';
import SlatIcon from './SlatIcon';
import Icon from './Icon';
import {
  CATEGORY_COLORS,
  CATEGORY_COLORS_DARK,
  CATEGORY_COLORS_LIGHT,
  SLAT_HEIGHT,
  ICON_SIZE,
  COLOR_CATEGORY_ICON,
  ITEM_SPACING
} from '../constants';

const TYPE_ADD = 't_add';
const TYPE_FACILITY = 't_facility';

const AddListItem = ({category}) => (
  <View style={{
    ...styles.item,
    borderWidth: 2,
    backgroundColor: CATEGORY_COLORS_DARK[category],
    borderColor: CATEGORY_COLORS[category],
  }}>
    <SlatIcon icon="fontawesome.plus" reduceWidth={true} />
    <Text style={styles.itemText}>Build Facility</Text>
  </View>
);

const _splitArray = array => {
    let halfway = Math.floor(array.length / 2);

    return {
        left: array.slice(0, halfway),
        right: array.slice(halfway, array.length)
    };
};


const FacilityModule = ({module, category}) => (
  <View style={{
    ...styles.module,
    backgroundColor: module ? CATEGORY_COLORS_DARK[category] : CATEGORY_COLORS_LIGHT[category],
  }}>
    {module && (
      <Icon
        icon={module.icon}
        size={ICON_SIZE * 0.6}
        color={COLOR_CATEGORY_ICON}
      />
    )}
  </View>
)

const FacilityModules = ({moduleBays, category}) => {
  if (!moduleBays || !moduleBays.length) {
    return null;
  }

  const modules = _splitArray(moduleBays);

  return (
    <View>
      <View style={styles.moduleBays}>
        {modules.left.map(module => <FacilityModule {...{module, category}} />)}
      </View>
      <View style={styles.moduleBays}>
        {modules.right.map(module => <FacilityModule {...{module, category}} />)}
      </View>
    </View>
  )
}

const FacilityListItem = ({item, category}) => (
  <View style={{
    ...styles.item,
    backgroundColor: CATEGORY_COLORS[category]
  }}>
    <SlatIcon icon={item.icon} reduceWidth={true} />
    <Text style={styles.itemText}>{item.label}</Text>
    { /* materialcommuniticons.worker */ }
    <FacilityModules {...{category, moduleBays: item.moduleBays}} />
  </View>
);

const COMPONENT_TO_TYPE_MAP = {
  [TYPE_ADD]: AddListItem,
  [TYPE_FACILITY]: FacilityListItem,
};

const ChooseListItem = (props) => {
  const Component = COMPONENT_TO_TYPE_MAP[props.item.type];

  return (<Component {...props} />);
};

const _prepareListData = facilities => [
  {key: '1', type: TYPE_ADD},
  ...(facilities || []).map(
    (facility, index) => ({
      ...facility,
      type: TYPE_FACILITY,
      key: `${facility.category}_${index}`,
    })
  )
];

const FacilityList = ({match:{params:{category}}, facilities}) => (
  <CategoryWrap {...{category}}>
    <FlatList
      data={_prepareListData(facilities, category)}
      renderItem={(props) => <ChooseListItem {...{...props, category}} />}
      extraData={{category}}
    />
  </CategoryWrap>
);

export default FacilityList;

const styles = StyleSheet.create({
  item: {
    height: SLAT_HEIGHT,
    marginBottom: ITEM_SPACING,
    marginLeft: ITEM_SPACING,
    marginRight: ITEM_SPACING,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: 'white',
  },
  moduleBays: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  module: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (SLAT_HEIGHT / 2) - (ITEM_SPACING*2),
    height: (SLAT_HEIGHT / 2) - (ITEM_SPACING*2),
    marginTop: ITEM_SPACING,
    marginRight: ITEM_SPACING,
  }
});
