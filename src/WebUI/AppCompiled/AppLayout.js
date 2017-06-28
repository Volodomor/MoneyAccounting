"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AppLayout = (function (_super) {
    __extends(AppLayout, _super);
    function AppLayout() {
        _super.call(this);
        this.state = { authrorized: true };
    }
    AppLayout.prototype.componentWillMount = function () {
        /*
        Promise.all(
            [
                authCtl.whoAmI(),
                dictCtl.getUnit(config.puUnitName),
                dictCtl.getUnit(config.dpkvUnitName),
                dictCtl.getSubjectByName(config.customerSubjectName)
            ])
            .then(values => {
                var user = values[0];
                var puUnit = values[1];
                var dpkvUnit = values[2];
                var customerSubject = values[3];

                app.setUser(user);
                app.setBasicUnits(puUnit, dpkvUnit);
                app.setCustomerSubject(customerSubject);

                this.setState({ authrorized: true })
            });
        */
    };
    AppLayout.prototype.componentDidMount = function () {
        /*
        if (this.refs["notifSystem"] && !app.notificationSystemReady) {
            app.setNotificationSystem(this.refs["notifSystem"] as NotificationSystem.System);
        }
        */
    };
    AppLayout.prototype.componentDidUpdate = function () {
        /*
        if (this.refs["notifSystem"] && !app.notificationSystemReady) {
            app.setNotificationSystem(this.refs["notifSystem"] as NotificationSystem.System);
        }
        */
    };
    AppLayout.prototype.render = function () {
        if (this.state.authrorized) {
            return React.createElement("div", null, this.props.children);
        }
        else {
            //return <div>{app.strings.MainNav.authorizing}</div>
            return React.createElement("div", null, "not authorized");
        }
    };
    return AppLayout;
}(React.Component));
exports.AppLayout = AppLayout;
