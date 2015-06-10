/**
 * Created by juanyong.zhang on 6/10/2015.
 */
module prft.interview {
    export class Country {
        private name:string

        private population:number;

        constructor(name:string, population:number) {
            this.name = name;
            this.population = population;
        }

        public get name():string {
            return this.name;
        }

        public set name(value:string) {
            this.name = value;
        }

        public get population():number {
            return this.population;
        }

        public set population(value:number) {
            this.population = value;
        }
    }
}