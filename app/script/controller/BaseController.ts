module prft.interview {
    export interface IInterviewController {
        addNames(newNames:String[]):void;
        removeName(idx : number) : void;
        retrieveCountries():Country[];
    }
}