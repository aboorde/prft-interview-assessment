/**
 * Created by juanyong.zhang on 6/17/2015.
 */
module prft.interview {
    'use strict';

    interface AssessmentCtrlScope extends ng.IScope {

    }

    interface IAssessmentCtrl {

    }

    export class AssessmentCtrl implements IAssessmentCtrl {
        constructor(private $scope:AssessmentCtrlScope) {

        }
    }
}