'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = (0, _styledComponents2.default)('select')([], function (props) {
  return {
    display: 'block',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#eee',
    borderRadius: '4px'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Select.defaultProps = {
  m: 0,
  w: 1,
  px: 1,
  py: 1,
  color: 'inherit',
  bg: 'transparent'
};

exports.default = Select;