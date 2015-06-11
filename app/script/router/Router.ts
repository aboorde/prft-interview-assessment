/// <reference path="../util/Module.ts" />
/// <reference path="../directives/LoginDirective.ts" />
/// <reference path="../controller/InterviewController.ts" />

import loginDirective = prft.interview.LoginDirective;
import interviewController = prft.interview.InterviewController;
import interviewService = prft.interview.InterviewService

module prft.interview {
    var itvApp = new Module('prft.interview', []);
    itvApp.addService(INTERVIEW_SERVICE, interviewService);
    itvApp.addController('interviewController', interviewController);
    itvApp.addDirective('loginDirective', loginDirective.factory());
    itvApp.addCORS();
}