import tinycolor from 'tinycolor2';
// CONSIDER:  https://github.com/bgrins/TinyColor or https://github.com/gka/chroma.js/
// toHex8String()

export const COLOR_CATEGORY_ICON = 'rgba(255, 255, 255, 0.3)';

export const COLOR_BACKGROUND = '#191919';

// export const COLOR_HOUSING = '#111';
// export const COLOR_ORE = '#2a231d';
// export const COLOR_H2O = '#003041';
// export const COLOR_STORAGE = '#3c3a33';
// export const COLOR_POWER = '#372b06';
// export const COLOR_FOOD = '#4a221a';

// https://color.adobe.com/create/color-wheel/?base=3&rule=Analogous&selected=1&name=My%20Color%20Theme&mode=rgb&rgbvalues=0.6100000000000001,0.47225374929218145,0.22147936292413567,0.65,0.21113411132647183,0.2778133897955021,0.254206577824566,0.65,0.5741049342858769,0.2496858182626235,0.20708236323424847,0.56,0.49387252105500423,0.6100000000000001,0.19507185995159207&swatchOrder=0,1,2,3,4
export const COLOR_HOUSING = '#651A06';
export const COLOR_ORE = '#2E1E1A';
export const COLOR_H2O = '#0E6562';
export const COLOR_STORAGE = '#444';
export const COLOR_POWER = '#B29017';
export const COLOR_FOOD = '#5F7245'; //568C17 , 94B26C

//export const COLOR_HOUSING = '#40358F';
//export const COLOR_ORE = '#7E9C32';
//export const COLOR_H2O = '#41A692';
//export const COLOR_STORAGE = '#444';
//export const COLOR_POWER = '#9C7838';
//export const COLOR_FOOD = '#A63647';

const _lighten = (color, amount = 10) => tinycolor(color).lighten(amount).toRgbString();
const _darken = (color, amount = 10) => tinycolor(color).darken(amount).toRgbString();

export const COLOR_HOUSING__LIGHT = _lighten(COLOR_HOUSING);
export const COLOR_ORE__LIGHT = _lighten(COLOR_ORE);
export const COLOR_H2O__LIGHT = _lighten(COLOR_H2O);
export const COLOR_STORAGE__LIGHT = _lighten(COLOR_STORAGE);
export const COLOR_POWER__LIGHT = _lighten(COLOR_POWER);
export const COLOR_FOOD__LIGHT = _lighten(COLOR_FOOD);

export const COLOR_HOUSING__DARK = _darken(COLOR_HOUSING);
export const COLOR_ORE__DARK = _darken(COLOR_ORE);
export const COLOR_H2O__DARK = _darken(COLOR_H2O);
export const COLOR_STORAGE__DARK = _darken(COLOR_STORAGE);
export const COLOR_POWER__DARK = _darken(COLOR_POWER);
export const COLOR_FOOD__DARK = _darken(COLOR_FOOD);
