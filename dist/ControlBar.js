'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlBar = function ControlBar(props) {
  return _react2.default.createElement(
    _Box2.default,
    null,
    _react2.default.createElement(
      _Button2.default,
      null,
      'Hi'
    ),
    _react2.default.createElement(
      _Button2.default,
      null,
      'There'
    )
  );
};

exports.default = ControlBar;