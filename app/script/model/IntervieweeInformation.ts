/**
 * Created by juanyong.zhang on 6/10/2015.
 */
module prft.interview {
    export class IntervieweeInformation {
        constructor(public contact:Contact, public businessUnit:string) {
            this.contact = contact;
            this.businessUnit = businessUnit;
            //this.yearOfExp = yearOfExp;
        }

    }
    export enum YearOfExp{
        //Range1 = '0-2 years', Range2 = '3-5 years', Range3 = '6-9 years', Range4 = 'Over 10 years'
        Range1, Range2, Range3, Range4
    }

}