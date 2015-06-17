/// <reference path="../util/Module.ts" />
/// <reference path="../controller/IntervieweeInfoCtrl.ts" />
/// <reference path="../controller/AssessmentCtrl.ts" />


import IntervieweeInfoCtrl = prft.interview.IntervieweeInfoCtrl;
import AssessmentCtrl = prft.interview.AssessmentCtrl

module prft.interview {
    'use strict';
    var dependencies:string[] = ['ngRoute'];
    var itvApp = new Module('prft.interview',dependencies);
    itvApp.addController('IntervieweeInfoCtrl', IntervieweeInfoCtrl);
    itvApp.addController('AssessmentCtrl', AssessmentCtrl);

    itvApp.module.config(function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: './view/loginForm.html',
                controller:'IntervieweeInfoCtrl'
            }).
            when('/assessment', {
                templateUrl: './view/assessment.html',
                controller:'AssessmentCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    });


}