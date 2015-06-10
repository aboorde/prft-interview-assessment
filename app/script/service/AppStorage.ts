/**
 * Created by juanyong.zhang on 6/8/2015.
 */
/// <reference path="../util/_app.ts" />
module prft.interview {
    'use strict';
    export class AppStorage {
        get(key: string): string {
            return JSON.parse(localStorage.getItem(key) || '""');
        }
        set(key: string, value: any): void {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}
