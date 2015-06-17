/**
 * Created by juanyong.zhang on 6/17/2015.
 */
module poc.beers {
    'use strict'
    export class Beer {
        constructor(public id:string, public name:string, public color:string, public hasTried:boolean) {
            this.id = id;
            this.name = name;
            this.color = color;
            this.hasTried = hasTried;
        }
    }

    interface IBeersScope extends ng.IScope {
        beers:Beer[];
        newBeer:Beer;
        showBeer:Boolean;
    }

    interface IBeersController {
        getBeers():ng.IPromise<Beer[]>;
        addBeer(newBeer:Beer):ng.IPromise<Beer>;
        showBeerForm(showBeer:Boolean):void;

    }

    class BeersController implements IBeersController {
        static $inject = ['$http'];

        constructor(private scope:IBeersScope, private $http:ng.IHttpService) {
        }

        getBeers():angular.IPromise<poc.beers.Beer[]> {
            return null;
        }

        addBeer(newBeer:Beer):angular.IPromise<poc.beers.Beer> {

            return null;
        }

        showBeerForm(showBeer:Boolean):void {
        }
    }

    interface IBeersService {
        getBeers():ng.IPromise<Beer[]>;
    }

    class BeersService implements IBeersService {
        static $inject = ['$http'];

        constructor(private $http:ng.IHttpService) {

        }

        getBeers():angular.IPromise<poc.beers.Beer[]> {
            return this.$http.get('api/beersapi').then(
                (data:ng.IHttpPromiseCallbackArg<Beer[]>):any => {
                    return data;
                }
            );

        }
    }

    //angular.module('beersApp').controller('beersApp.beersCtrl', BeersController)
}