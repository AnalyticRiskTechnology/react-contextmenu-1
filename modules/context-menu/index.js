"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _store = require("../redux/store");

var _store2 = _interopRequireDefault(_store);

var _wrapper = require("./wrapper");

var _wrapper2 = _interopRequireDefault(_wrapper);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextMenu = (0, _createReactClass2.default)({
    displayName: "ContextMenu",
    propTypes: {
        identifier: _propTypes2.default.string.isRequired
    },
    getInitialState: function getInitialState() {
        return _store2.default.getState();
    },
    componentDidMount: function componentDidMount() {
        this.unsubscribe = _store2.default.subscribe(this.handleUpdate);
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    },
    handleUpdate: function handleUpdate() {
        this.setState(this.getInitialState());
    },
    render: function render() {
        return _react2.default.createElement(_wrapper2.default, _extends({}, this.props, this.state));
    }
});

exports.default = ContextMenu;