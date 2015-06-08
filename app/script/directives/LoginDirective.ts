/// <reference path="../util/_app.ts" />

module prft.interview {
    'use strict';
    export class LoginDirective implements ng.IDirective {
        restrict = 'E';
        templateUrl = "./view/loginForm.html";
        replace = true;
        constructor(private $location: ng.ILocationService) {
        }
        static factory(): ng.IDirectiveFactory {
            var directive = ($location: ng.ILocationService) => new LoginDirective($location);
            return directive;
        }
    }
}