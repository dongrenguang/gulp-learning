"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (arr) {
    return arr.reduce(function (prev, cur) {
        return prev + cur;
    });
};