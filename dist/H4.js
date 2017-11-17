'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H4 = (0, _styledComponents2.default)('h4')([], function (props) {
  return {
    textAlign: '' + (props.center ? 'center' : 'left')
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.fontWeight);

H4.defaultProps = {
  fontWeight: '600'
};

exports.default = H4;