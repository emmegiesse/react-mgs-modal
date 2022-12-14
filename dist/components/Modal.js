"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Modal = _ref => {
  let {
    isShowing,
    hide,
    text,
    title,
    primary,
    secondary
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, isShowing ? /*#__PURE__*/_react.default.createElement(Overlay, null, /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(ModalContent, null, /*#__PURE__*/_react.default.createElement(ModalHeader, {
    primary: primary
  }, /*#__PURE__*/_react.default.createElement(ModalTitle, {
    secondary: secondary
  }, title || "Titre"), /*#__PURE__*/_react.default.createElement(ModalBtn, {
    primary: primary,
    secondary: secondary,
    onClick: hide
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xD7"))), /*#__PURE__*/_react.default.createElement(ModalBody, null, text || "Texte")))) : null);
};
var _default = Modal;
exports.default = _default;
const Overlay = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 1;\n    background-color: darkgrey;\n    font-family: Roboto;\n"])));
const Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n"])));
const ModalContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    z-index: 1;\n    background: #fff;\n    position: relative;\n    margin: auto;\n    border-radius: 5px;\n    max-width: 500px;\n    width: 80%;\n"])));
const ModalHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color:", ";\n"])), props => props.primary || "lightgrey");
const ModalTitle = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-size:20px;\n    margin-left:16px;\n    color:", "\n"])), props => props.secondary || "white");
const ModalBtn = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    position:relative;\n    top:-25px;\n    right:-10px;\n    font-size: 1.4rem;\n    cursor: pointer;\n    width: 25px;\n    height:25px;\n    background-color:", ";\n    border-radius:50%;\n    display:flex;\n    justify-content:center;\n    color:", ";\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n"])), props => props.primary || "white", props => props.secondary || "black");
const ModalBody = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    min-height: 20px;\n    overflow: hidden;\n    padding: 1rem;\n"])));