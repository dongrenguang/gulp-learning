"use strict";

var _sum = require("./math/sum");

var _sum2 = _interopRequireDefault(_sum);

var _sqr = require("./math/sqr");

var _sqr2 = _interopRequireDefault(_sqr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [1, 2, 3, 4, 5];
var sumSqr = function sumSqr(arr) {
    var sqrs = arr.map(function (item) {
        return (0, _sqr2.default)(item);
    });
    return (0, _sum2.default)(sqrs);
};

console.log(sumSqr(data));