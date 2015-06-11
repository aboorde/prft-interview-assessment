/**
 * Created by juanyong.zhang on 6/10/2015.
 */
/// <reference path="../util/_app.ts" />
/// <reference path="../model/Country.ts" />
/// <reference path="../service/BaseService.ts" />


module prft.interview {
    export var INTERVIEW_SERVICE = 'interviewService';
    export class InterviewService implements IInterviewService {
        findCountries():Country[] {
            console.log("InterviewService.findCountries")
            var china:Country = new Country('China', 1359821000);
            var india:Country = new Country('India', 1205625000);
            var usa:Country = new Country('USA', 312241000);
            //var countries : Country[] = [china, india, usa];
            return [china, india, usa];
        }
    }
}