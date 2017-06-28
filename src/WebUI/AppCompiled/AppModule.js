"use strict";
var react_router_1 = require("react-router");
var history_1 = require("history");
var createAppHistory = react_router_1.useRouterHistory(history_1.createHistory);
var appHistory = createAppHistory({});
var AppModule = (function () {
    function AppModule() {
        this.history = appHistory;
        this.navLink = {
            reestr: "/reestr",
        };
    }
    return AppModule;
}());
exports.app = new AppModule();
