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
// void 
function log(message) {
    console.log(message);
}
const userInterface = {
    id: 5,
    name: 'john'
};
const p1 = 5;
const add = (x, y) => x + y; // create an arrow function 
const sub = (x, y) => x - y;
// wrong: const add: mathFunc = (x:number, y: string): number => x + y 
// classes && classes + interfaces 
//name has not initializer and is not assigned in the constructor; 
// constructor is a method, so classes can have properties, 
// they can also have methods which are just functions within the class 
// constructor will run whenever the class is or whenever an object is instantiated from that class 
class Person {
    constructor() {
        console.log(123);
    }
}
const brad = new Person();
const mike = new Person();
// ========================================================
class Person1 {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const frank = new Person1(5, 'frank');
frank.id = 8;
const tina = new Person1(6, 'tina');
console.log(frank);
console.log(tina.register());
class Person3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `aaa`;
        // return 1
    }
}
// extending classes(subclasses) 
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'dav', 'CEO');
console.log(emp.register());
//generics - re-usable components , placeholders 
// typescript with react 
