export * from './colors';

import {
  COLOR_HOUSING,
  COLOR_FOOD,
  COLOR_POWER,
  COLOR_ORE,
  COLOR_H2O,
  COLOR_STORAGE,
  COLOR_HOUSING__LIGHT,
  COLOR_ORE__LIGHT,
  COLOR_H2O__LIGHT,
  COLOR_STORAGE__LIGHT,
  COLOR_POWER__LIGHT,
  COLOR_FOOD__LIGHT,
  COLOR_HOUSING__DARK,
  COLOR_ORE__DARK,
  COLOR_H2O__DARK,
  COLOR_STORAGE__DARK,
  COLOR_POWER__DARK,
  COLOR_FOOD__DARK,
} from './colors';

export const SLAT_HEIGHT = 65;
export const ICON_SIZE = 25;
export const ITEM_SPACING = 5;

export const RESOURCE_FOOD = 'r_food';
export const RESOURCE_AIR = 'r_air';
export const RESOURCE_POWER = 'r_power';
export const RESOURCE_ORE = 'r_ore';
export const RESOURCE_WATER = 'r_water';

export const CATEGORY__HOUSING = 'c_housing';
export const CATEGORY__FOOD = 'c_food';
export const CATEGORY__POWER = 'c_power';
export const CATEGORY__ORE = 'c_ore';
export const CATEGORY__H2O = 'c_h2o';
export const CATEGORY__STORAGE = 'c_storage';

export const RESOURCE_DATA = {
  [RESOURCE_FOOD]: {label: 'Food'},
  [RESOURCE_AIR]: {label: 'Air'},
  [RESOURCE_POWER]: {label: 'Power'},
  [RESOURCE_ORE]: {label: 'Ore'},
  [RESOURCE_WATER]: {label: 'Water'},
};

export const CATEGORY_COLORS = {
  [CATEGORY__HOUSING]: COLOR_HOUSING,
  [CATEGORY__FOOD]: COLOR_FOOD,
  [CATEGORY__POWER]: COLOR_POWER,
  [CATEGORY__ORE]: COLOR_ORE,
  [CATEGORY__H2O]: COLOR_H2O,
  [CATEGORY__STORAGE]: COLOR_STORAGE,
};
export const CATEGORY_COLORS_DARK = {
  [CATEGORY__HOUSING]: COLOR_HOUSING__DARK,
  [CATEGORY__FOOD]: COLOR_FOOD__DARK,
  [CATEGORY__POWER]: COLOR_POWER__DARK,
  [CATEGORY__ORE]: COLOR_ORE__DARK,
  [CATEGORY__H2O]: COLOR_H2O__DARK,
  [CATEGORY__STORAGE]: COLOR_STORAGE__DARK,
};
export const CATEGORY_COLORS_LIGHT = {
  [CATEGORY__HOUSING]: COLOR_HOUSING__LIGHT,
  [CATEGORY__FOOD]: COLOR_FOOD__LIGHT,
  [CATEGORY__POWER]: COLOR_POWER__LIGHT,
  [CATEGORY__ORE]: COLOR_ORE__LIGHT,
  [CATEGORY__H2O]: COLOR_H2O__LIGHT,
  [CATEGORY__STORAGE]: COLOR_STORAGE__LIGHT,
};

export const CATEGORY_ICONS = {
  [CATEGORY__HOUSING]: 'materialcommunityicons.home', // fontawesome.building
  [CATEGORY__FOOD]: 'materialcommunityicons.food-apple', // fontawesome.shopping-basket
  [CATEGORY__POWER]: 'materialcommunityicons.lightbulb', // fontawesome.lightbulb-o
  [CATEGORY__ORE]: 'materialcommunityicons.anvil', // fontawesome.cogs
  [CATEGORY__H2O]: 'fontawesome.tint',
  [CATEGORY__STORAGE]: 'materialcommunityicons.archive', // fontawesome.industry materialicons.storage feather.box entypo.box
};

export const CATEGORY_LABELS = {
  [CATEGORY__HOUSING]: 'Housing',
  [CATEGORY__FOOD]: 'Culinary',
  [CATEGORY__POWER]: 'Energy',
  [CATEGORY__ORE]: 'Mining / Smelting',
  [CATEGORY__H2O]: 'H2O / O2',
  [CATEGORY__STORAGE]: 'Storage',
};

const _makeCategoryData = category => ({
  category,
  label: CATEGORY_LABELS[category],
  icon: CATEGORY_ICONS[category],
});

export const CATEGORY_DATA = [
  _makeCategoryData(CATEGORY__HOUSING),
  _makeCategoryData(CATEGORY__FOOD),
  _makeCategoryData(CATEGORY__POWER),
  _makeCategoryData(CATEGORY__ORE),
  _makeCategoryData(CATEGORY__H2O),
  _makeCategoryData(CATEGORY__STORAGE),
];
