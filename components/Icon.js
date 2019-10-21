import React from 'react';
import {View, Text} from 'react-native';
import {
  Entypo,
  FontAwesome,
  Ionicons,
  Foundation,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons';

const TYPE_MAP = {
  'entypo': Entypo,
  'fontawesome': FontAwesome,
  'foundation': Foundation,
  'ionicons': Ionicons,
  'materialcommunityicons': MaterialCommunityIcons,
  'materialicons': MaterialIcons,
  'feather': Feather,
};

const _extractTypeAndName = icon => {
  const dotIndex = icon.indexOf('.');

  if (dotIndex === -1)
    throw new Error(`Invalid icon: ${icon} :: no type specified?`);

  return {
    type: icon.substring(0, dotIndex),
    name: icon.substring(dotIndex + 1),
  };
};

export default class Icon extends React.Component {
  render() {
    const {icon, ...otherProps} = this.props;
    const {type, name} = _extractTypeAndName(icon);
    const Component = TYPE_MAP[type];

    if (!Component)
      return (
        <View><Text>Icon type not known</Text></View>
      );
    
    return (
      <Component name={name} {...otherProps} />
    );
  }
}