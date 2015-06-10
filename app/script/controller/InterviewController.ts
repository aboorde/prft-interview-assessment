/**
 * Created by juanyong.zhang on 6/9/2015.
 */
/// <reference path="../util/_app.ts" />
/// <reference path='../util/Logger.ts' />
/// <reference path='../controller/BaseController.ts' />
/// <reference path='../model/Country.ts' />
module prft.interview {
    export interface InterviewControllerScope extends ng.IScope {
        firstName:String;
        lastName:String;
        names:String[];
        countries : Country[];
    }
    export class InterviewController implements IInterviewController {
        scope:InterviewControllerScope;
        static $inject = ['$scope'];

        constructor($scope:InterviewControllerScope) {
            this.scope = $scope;
            this.scope.names = ["Joe", "Jim", "Jill", "Jye"];
            var china:Country = new Country('China', 1359821000);
            var india:Country = new Country('India', 1205625000);
            var usa:Country = new Country('USA', 312241000);
            usa.setName('United States of America');
            this.scope.countries = [china, india, usa];
        }

        addName(newNames:String[]):void {
            for(var idx in newNames){
                this.scope.names.push(newNames[idx]);
            }
            newNames = null;
        }

        removeName(idx:number):void {
            //var idx1:number = this.scope.names.indexOf("sdfsd");
            this.scope.names.splice(idx, 1);
        }
    }

}
