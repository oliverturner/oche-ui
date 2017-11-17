'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonLarge = (0, _styledComponents2.default)(_Button2.default)([], function (props) {
  return {
    textTransform: 'uppercase'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

ButtonLarge.defaultProps = {
  pt: 1,
  fontSize: 1
};

exports.default = ButtonLarge;