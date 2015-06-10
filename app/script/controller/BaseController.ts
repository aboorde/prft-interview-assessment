module prft.interview {
    export interface IInterviewController {
        addName(newName : String) : void;
        removeName(idx : number) : void;
    }
}