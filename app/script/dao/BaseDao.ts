/**
 * Created by juanyong.zhang on 6/10/2015.
 */

/// <reference path="../util/_app.ts" />
/// <reference path="../model/Country.ts" />


module prft.interview {
    export interface IInterviewDao {
        retrieveCountries() : Country[]
    }
}