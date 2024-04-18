'use strict';

var author = require('./modules/author.js');
var cityOptions = require('./modules/cityOptions.js');
var color = require('./modules/color.js');
var demo = require('./modules/demo.js');



exports.author_strict = author.author_strict;
exports.author_traceId = author.author_traceId;
exports.city_options = cityOptions.city_options;
exports.get_multiple_color = color.get_multiple_color;
exports.hex_to_rgb = color.hex_to_rgb;
exports.reduce_opacity = color.reduce_opacity;
exports.rgb_to_hex = color.rgb_to_hex;
exports.demo = demo.demo;
