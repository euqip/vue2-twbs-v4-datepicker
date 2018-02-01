# datepicker (vue2)

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

This demo is based on vue-cli: vue init webpack-simple test-tree

A simple vue JS datepicker implementing font awesome and Bootstrap V4.

Available properties:
- blockyearsize: { type: Number},  // a number of years going back or foreward.  To pass a numbre use v-bind or short :
- buttons     : { type: Boolean, default: false },  //add Ok and Cancel buttons, ok confirms selection
- buttoncancel: { type: String, default : "Cancel"  }, // the predifened cancel button text
- buttonok    : { type: String, default : "Ok"  }, // the predifened Ok button text
- buttontoday : { type: String, default : "Today"  }, // the predifened button text
- date        : { type: String }, // the dpredifened date
- dateformat  : { type: String, default : "DD-MM-YYYY" }, // the user date format
- iconcalendar: { type: String, default : "fa-calendar"}, // the icon at the right side of component
- iconcancel  : { type: String, default : "fa-close"}, // the icon at the right side of component
- icondesable : { type: String, default : "fa-calendar"}, // the icon at the right side of component
- iconok      : { type: String, default : "fa-check"}, // the icon at the right side of component
- icontoday   : { type: String, default : 'fa-calendar'},
- isodate     : { type: String, default : "YYYY-MM-DD"}, // the date format used as form parameter
- label       : { type: String, default : "" }, // the text at the left side of component
- locale      : { type: String, default : 'en' }, // the locale to use with moment (changes first day of week too)
- mindate     : { type: String, default : '1900-01-01' }, // limit the min da  te availeble in picker
- maxdate     : { type: String, default : '2900-01-01'}, // limit the max date available in picker
- name        : { type: String, default : ''}, // the form field name
- todaybtn    : { type: Boolean }, // show/hide a functionnal today button

