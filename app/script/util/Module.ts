/// <reference path="../util/_app.ts" />
///<reference path="..\..\typeDir\angularjs\angular.d.ts"/>

module prft.interview {

    export class Module {

        module:ng.IModule;

        constructor(name:string, modules:Array<string>) {
            this.module = angular.module(name, modules);
        }

        public addController(name:string, controller:Function) {
            this.module.controller(name, controller);
        }

        public addService(name:string, service:Function) {
            this.module.service(name, service);
        }

        public addDirective(name:string, factory:ng.IDirectiveFactory) {
            this.module.directive(name, factory);
        }

        public addConfig(oConfig:Function):void {
            this.module.config(oConfig);
            return;
        }

        public addFilter(name:string, filterFunction:Function):void {
            this.module.filter(name, filterFunction);
        }

        public addCORS():void {
            this.module.config(['$httpProvider', function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }]);
            //this.module.config(function (uiGmapGoogleMapApiProvider) {
            //    uiGmapGoogleMapApiProvider.configure({
            //        //    key: 'your api key',
            //        v: '3.17',
            //        libraries: 'weather,geometry,visualization'
            //    });
            //})
            return;
        }
    }
}