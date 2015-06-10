module prft.interview {
    export interface InterviewControllerItf {
        addName(newName : String) : void;
        removeName(idx : number) : void;
    }
}