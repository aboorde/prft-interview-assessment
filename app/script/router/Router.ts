/// <reference path="../util/Module.ts" />
/// <reference path="../controller/IntervieweeInfoCtrl.ts" />

import IntervieweeInfoCtrl = prft.interview.IntervieweeInfoCtrl;

module prft.interview {
    var dependencies:string[] = ['ngRoute'];
    var itvApp = new Module('prft.interview',dependencies);
    itvApp.addController('IntervieweeInfoCtrl', IntervieweeInfoCtrl);

    itvApp.module.config(function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: './view/loginForm.html',
                controller:'IntervieweeInfoCtrl'
            }).
            when('/assessment', {
                templateUrl: 'assessment.html',
            }).
            otherwise({
                redirectTo: '/login'
            });
    });


}