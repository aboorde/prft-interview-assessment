module prft.interview {
    export interface IInterviewController {
        addName(...newName:string[]):void;
        removeName(idx : number) : void;
    }
}