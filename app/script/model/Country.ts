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

        public getName():string {
            return this.name;
        }

        public setName(value:string) {
            this.name = value;
        }

        public getPopulation():number {
            return this.population;
        }

        public setPopulation(value:number) {
            this.population = value;
        }
    }
}