import * as React from "react";

interface AppState {
    authrorized: boolean;
}

export class AppLayout extends React.Component<any, AppState> {
    constructor() {
        super();
        this.state = { authrorized: true }
    }

    componentWillMount() {
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
    }

    componentDidMount() {
        /*
        if (this.refs["notifSystem"] && !app.notificationSystemReady) {
            app.setNotificationSystem(this.refs["notifSystem"] as NotificationSystem.System);
        }
        */
    }

    componentDidUpdate() {
        /*
        if (this.refs["notifSystem"] && !app.notificationSystemReady) {
            app.setNotificationSystem(this.refs["notifSystem"] as NotificationSystem.System);
        }
        */
    }

    render() {
        if (this.state.authrorized) {
            return <div>{this.props.children}</div>
        } else {
            //return <div>{app.strings.MainNav.authorizing}</div>
            return <div>not authorized</div>
        }
    }
}