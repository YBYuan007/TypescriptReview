"use strict";
let id = 5;
let company = "Tracersy Media";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
// wrong: ids.push("Hello");
ids.push(8);
let arr = [true, 'dave', 999];
// tuple 
let person = [8, 'aaa', true];
// wrong: let person: [number, string, boolean] = [8, 'aaa',444]; 
//tuple array 
let employee = [['dave', 888], ['steve', 777]];
//union 
let pid;
pid = 'wahtever';
//Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["left"] = 0] = "left";
    Direction1[Direction1["right"] = 1] = "right";
    Direction1[Direction1["up"] = 2] = "up";
    Direction1[Direction1["down"] = 3] = "down";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.left);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["left"] = 2] = "left";
    Direction2[Direction2["right"] = 3] = "right";
    Direction2[Direction2["up"] = 4] = "up";
    Direction2[Direction2["down"] = 5] = "down";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.left);
console.log(Direction2.up);
var Direction3;
(function (Direction3) {
    Direction3["left"] = "a";
    Direction3["right"] = "b";
    Direction3["up"] = "c";
    Direction3["down"] = "d";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.left);
console.log(Direction3.up);
const user = {
    id: 5,
    name: 'john'
};
// Type assertion 
let cid = 'abc';
let customerId = cid;
customerId = 5;
// alternatively: let customerId = <number>cid
// using types in functions 
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 6));
//interfaces 
// function interface 
// classes 
// data modifiers 
// implement interface in class 
// extending classes(subclasses) 
//generics 
// typescript with react 
