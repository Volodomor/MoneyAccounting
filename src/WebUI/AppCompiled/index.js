"use strict";
/*require('es6-object-assign').polyfill();
require('es6-promise').polyfill();*/
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var AppModule_1 = require("./AppModule");
var AppLayout_1 = require("./AppLayout");
var Reestr_1 = require("./Modules/Reestr/Reestr");
/*import { AdministrativeCaseListContainer } from "./modules/administrativeCaseList/AdministrativeCaseList";
import { CriminalCaseList } from "./modules/criminalCaseList/CriminalCaseList";
import { DpkvActionCaseListContainer } from "./modules/actionCaseList/DpkvActionCaseList";
import { MyCasesContainer } from "./modules/myCases/MyCases";
import { PuActionCaseListContainer } from "./modules/actionCaseList/PuActionCaseList";
import { ActionCaseContainer } from "./modules/actionCase/ActionCase";
import { AdministrativeCaseContainer } from "./modules/administrativeCase/AdministrativeCase";
import { PretentionList } from "./modules/pretentionList/PretentionList";
import { PretentionContainer } from "./modules/pretention/Pretention";
import { Calendar } from "./modules/calendar/Calendar";
import { BankruptcyProcedures } from "./modules/bankruptcy/BankruptcyProcedures"
import { ExecutiveCaseList } from "./modules/executiveCaseList/ExecutiveCaseList"
import { Reports } from "./modules/reports/Reports"
import { About } from "./modules/about/About"
*/
function handleRouteError(errorObj) {
    //app.log.error(errorObj);
}
ReactDOM.render(React.createElement(react_router_1.Router, {history: AppModule_1.app.history, onError: handleRouteError}, 
    React.createElement(react_router_1.Route, {path: "/", component: AppLayout_1.AppLayout}, 
        React.createElement(react_router_1.IndexRedirect, {to: AppModule_1.app.navLink.reestr}), 
        React.createElement(react_router_1.Route, {path: AppModule_1.app.navLink.reestr, component: Reestr_1.ReestrContainer}))
), document.getElementById("site_content"));
/*
ReactDOM.render(
    <Router history={app.history} onError={handleRouteError}>
        <Route path="/" component={AppLayout}>
            <IndexRedirect to={app.navLink.myCases} />
            <Route path={app.navLink.administrativeCaseList} component={AdministrativeCaseListContainer} />
            <Route path={app.navLink.AdministrativeCase} component={AdministrativeCaseContainer} />
            <Route path={app.navLink.criminalCaseList} component={CriminalCaseList} />
            <Route path={app.navLink.dpkvActionCaseList} component={DpkvActionCaseListContainer} />
            <Route path={app.navLink.myCases} component={MyCasesContainer} />
            <Route path={app.navLink.puActionCaseList} component={PuActionCaseListContainer} />
            <Route path={app.navLink.ActionCase} component={ActionCaseContainer} />
            <Route path={app.navLink.pretentionList} component={PretentionList} />
            <Route path={app.navLink.pretention} component={PretentionContainer} />
            <Route path={app.navLink.calendar} component={Calendar} />

            <Route path={app.navLink.BankruptcyProcedures} component={BankruptcyProcedures} />
            <Route path={app.navLink.ExecutiveCases} component={ExecutiveCaseList} />
            <Route path={app.navLink.Reports} component={Reports} />

            <Route path={app.navLink.About} component={About} />
        </Route>
    </Router>, document.getElementById("content"));
*/ 
