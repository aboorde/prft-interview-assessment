/**
 * Created by juanyong.zhang on 6/16/2015.
 */
class YearOfExp {
    public key:number;
    public value:string;
    // boilerplate
    constructor(key:number, value:string) {
        this.key=key;
        this.value=value;
    }

    toString() {
        return this.value;
    }

    static Range1 = new YearOfExp(0,"hello");

}