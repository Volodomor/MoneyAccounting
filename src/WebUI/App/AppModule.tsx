import { useRouterHistory } from "react-router";
import { createHistory } from "history";

const createAppHistory = useRouterHistory(createHistory);
const appHistory = createAppHistory({
    //basename: config.baseHref
});

class AppModule {
    history = appHistory;

    navLink = {
        reestr: "/reestr",
        /*
        about: "/about",
        testPage: "/testPage",
        administrativeCaseList: "/AdministrativeCases",
        AdministrativeCase: "/AdministrativeCases/:caseId(/:sourceId)",
        AdministrationCaseLink: (caseId) => { return "/AdministrativeCases/" + caseId },
        AdministrationCaseByCaseLink: (caseId, sourceId) => { return "/AdministrativeCases/" + caseId + "/" + sourceId },
        criminalCaseList: "/CriminalCases",
        dpkvActionCaseList: "/DpkvActionCases",
        myCases: "/MyCases",
        puActionCaseList: "/PuActionCases",
        ActionCase: "/ActionCases/:caseId(/:sourceId)",
        ActionCaseLink: (caseId) => { return "/ActionCases/" + caseId },
        ActionCaseByCaseLink: (caseId, sourceId) => { return "/ActionCases/" + caseId + "/" + sourceId },
        pretentionList: "/Pretentions",
        pretention: "/Pretentions/:pretentionId",
        pretentionLink: (pretentionId) => { return "/Pretentions/" + pretentionId },
        calendar: "/Calendar",
        calendarLink: (utcDate) => `/Calendar/${utcDate}`,
        BankruptcyProcedures: "/Bankruptcy",
        ExecutiveCases: "ExecutiveCases",
        Reports: "/Reports",
        About: "/About"
        */
    }
}

export const app = new AppModule();