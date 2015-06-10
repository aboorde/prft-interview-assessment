/// <reference path="../util/Module.ts" />
/// <reference path="../directives/LoginDirective.ts" />
/// <reference path="../controller/InterviewController.ts" />

import loginDirective = prft.interview.LoginDirective;
import interviewController = prft.interview.InterviewController;

module prft.interview {
    var itvApp = new Module('prft.interview', []);
    itvApp.addController('interviewController', interviewController);
    itvApp.addDirective('loginDirective', loginDirective.factory());
    itvApp.addCORS();
}