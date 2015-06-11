/**
 * Created by juanyong.zhang on 6/15/2015.
 */
/// <reference path="../util/_app.ts" />
/// <reference path='../util/Logger.ts' />
/// <reference path='../model/IntervieweeInformation.ts' />

module prft.interview {
    export interface IntervieweeInfoCtrlScope extends ng.IScope {
        intervieweeInformation:IntervieweeInformation;
        itveInfo:IntervieweeInformation;
    }
    export class IntervieweeInfoCtrl implements IIntervieweeInfoCtrl {
        scope:IntervieweeInfoCtrlScope;
        yearOfExpOptions:YearOfExp[];

        constructor($scope:IntervieweeInfoCtrlScope) {
            this.scope = $scope;
            YearOfExp.Range1;
        }

        beginTest():void {
            console.log((this.scope.itveInfo))
        }
    }


}