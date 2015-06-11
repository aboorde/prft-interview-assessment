/**
 * Created by juanyong.zhang on 6/16/2015.
 */
interface Entity {
    name:string;
    price:number;
    id:number;
}

function sortBy <T> (a:T[], callback?:(item:T)=>any) {
    var result:T[] = a.slice(0);
    result.sort(function (x, y) {
        var kx = callback(x);
        var ky = callback(y);
        return kx > ky ? 1 : kx < ky ? -1 : 0;
    })
    return result;
}

var products:Entity[] = [
    {name:'Lawnmower', price:395.00, id: 345801},
    {name:'Hammer', price:3.75, id: 256488},
    {name:'Toaster', price:19.95, id: 213801},
    {name:'Padlock', price:4.50, id: 372569},
]

var sorted = sortBy(products, x => x.name);