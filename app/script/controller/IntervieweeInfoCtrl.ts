/**
 * Created by juanyong.zhang on 6/15/2015.
 */
/// <reference path="../util/_app.ts" />
/// <reference path='../util/Logger.ts' />
/// <reference path='../model/IntervieweeInformation.ts' />

module prft.interview {
    'use strict'

    export interface IntervieweeInfoCtrlScope extends ng.IScope {
        itveInfo:IntervieweeInformation;
    }

    export interface IIntervieweeInfoCtrl {
        startAssessment():void;
    }

    export class IntervieweeInfoCtrl implements IIntervieweeInfoCtrl {
        constructor(private $scope:IntervieweeInfoCtrlScope, private $location:ng.ILocationService) {
        }

        startAssessment():void {
            console.log((this.$scope.itveInfo))
            console.log((Math.random().toString(36)+'00000000000000000').slice(2, 8+2))
            this.$location.path('/assessment');
        }
    }




}