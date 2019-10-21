import {
  CATEGORY_DATA,

  CATEGORY__HOUSING,
  CATEGORY__FOOD,
  CATEGORY__POWER,
  CATEGORY__ORE,
  CATEGORY__H2O,
  CATEGORY__STORAGE
} from './constants';

export const SAMPLE_FACILITIES = [
  {category: CATEGORY__HOUSING, label: 'House', icon: 'materialcommunityicons.account-child'}, // fontawesome.home materialcommunityicons.home-variant materialcommunityicons.floor-plan materialcommunityicons.sofa
  {category: CATEGORY__HOUSING, label: 'Townhomes', icon: 'materialcommunityicons.home-modern'},
  {category: CATEGORY__HOUSING, label: 'Apartments', icon: 'materialcommunityicons.office-building'},

  {category: CATEGORY__FOOD, label: 'Garden', icon: 'materialcommunityicons.barley', moduleBays: [ // fontawesome.leaf
    null, {icon: CATEGORY_DATA[4].icon}
  ]},
  {category: CATEGORY__FOOD, label: 'Homestead', icon: 'materialcommunityicons.corn', moduleBays: [ // fontawesome.tree entypo.tree
    {icon: CATEGORY_DATA[1].icon}, {icon: CATEGORY_DATA[2].icon}, null
  ]},
  {category: CATEGORY__FOOD, label: 'Farm', icon: 'materialcommunityicons.silo', moduleBays: [ // foundation.trees materialcommunityicons.tractor
    {icon: CATEGORY_DATA[1].icon}, null, {icon: CATEGORY_DATA[2].icon}, null, {icon: CATEGORY_DATA[4].icon}
  ]},

  {category: CATEGORY__POWER, label: 'Power Station', icon: 'fontawesome.plug'},
  {category: CATEGORY__POWER, label: 'Tesla Tower', icon: 'materialcommunityicons.tower-fire'}, // fontawesome.superpowers
  {category: CATEGORY__POWER, label: 'Thorium Reactor', icon: 'ionicons.md-nuclear'},

  {category: CATEGORY__ORE, label: 'Mine', icon: 'materialicons.landscape'},
  {category: CATEGORY__ORE, label: 'Ore Storage Shed', icon: 'materialcommunityicons.garage'}, // materialicons.store
  {category: CATEGORY__ORE, label: 'Ore Warehouse', icon: 'materialcommunityicons.factory'}, // materialcommunityicons.robot-industrial
  {category: CATEGORY__ORE, label: 'Smelter', icon: 'materialcommunityicons.barrel'},
  {category: CATEGORY__ORE, label: 'Metal Refinery', icon: 'fontawesome.industry'},
  {category: CATEGORY__ORE, label: 'Buried Nuclear', icon: 'materialcommunityicons.atom'}, // foundation.mountains

  {category: CATEGORY__H2O, label: 'Condenser', icon: 'materialcommunityicons.flask'}, // materialcommunityicons.cloud
  {category: CATEGORY__H2O, label: 'Air Plant', icon: 'materialcommunityicons.weather-windy-variant'}, // materialcommunityicons.chemical-weapon materialcommunityicons.smog
  {category: CATEGORY__H2O, label: 'Water Sanitizer', icon: 'materialcommunityicons.beaker'},
  {category: CATEGORY__H2O, label: 'Terraformer', icon: 'materialcommunityicons.earth'},
  {category: CATEGORY__H2O, label: 'Water Refinery', icon: 'materialcommunityicons.water-pump'}, // materialcommuntyicons.beer

  {category: CATEGORY__STORAGE, label: 'Storage Building', icon: 'materialcommunityicons.package-variant'}, // materialcommunityicons.buffer materialcommunityicons.file-cabinet materialcommunityicons.locker-multiple
  {category: CATEGORY__STORAGE, label: 'Storage Warehouse', icon: 'materialcommunityicons.city'},
  {category: CATEGORY__STORAGE, label: 'Storage Megahouse', icon: 'materialcommunityicons.city-variant'},
];