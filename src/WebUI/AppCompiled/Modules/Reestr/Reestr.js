"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Reestr = (function (_super) {
    __extends(Reestr, _super);
    function Reestr() {
        _super.call(this);
    }
    Reestr.prototype.componentWillMount = function () {
    };
    Reestr.prototype.componentDidMount = function () {
    };
    Reestr.prototype.componentDidUpdate = function () {
    };
    Reestr.prototype.render = function () {
        return React.createElement("div", null, "Реестр");
    };
    return Reestr;
}(React.Component));
exports.ReestrContainer = Reestr;
