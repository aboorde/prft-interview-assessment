/**
 * Created by juanyong.zhang on 6/9/2015.
 */
/// <reference path="../util/_app.ts" />
/// <reference path='../util/Logger.ts' />
/// <reference path='../controller/BaseController.ts' />
/// <reference path='../model/Country.ts' />
/// <reference path="../service/InterviewService.ts" />

module prft.interview {
    export interface InterviewControllerScope extends ng.IScope {
        firstName:String;
        lastName:String;
        names:String[];
        countries : Country[];
    }
    export class InterviewController implements IInterviewController {
        scope:InterviewControllerScope;
        static $inject = ['$scope','interviewService'];

        private interviewService:IInterviewService = null;


        constructor($scope:InterviewControllerScope, interviewService:InterviewService) {
            this.scope = $scope;
            this.scope.names = ["Joe", "Jim", "Jill", "Jye"];

            var china:Country = new Country('China', 1359821000);
            var india:Country = new Country('India', 1205625000);
            var usa:Country = new Country('USA', 312241000);
            usa.setName('United States of America');
            this.scope.countries = [china, india, usa];


            this.scope.firstName = "Boy";

            this.interviewService = interviewService;
        }

        addNames(newNames:String[]):void {
            for (var idx in newNames) {
                this.scope.names.push(newNames[idx]);
            }
            newNames = null;
        }

        removeName(idx:number):void {
            //var idx1:number = this.scope.names.indexOf("sdfsd");
            this.scope.names.splice(idx, 1);
        }

        retrieveCountries():Country[] {
            this.scope.countries = this.scope.countries || this.interviewService.findCountries();
            return this.scope.countries;
        }
    }

}
