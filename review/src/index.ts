let id: number = 5;
let company: string = "Tracersy Media";
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
// wrong: ids.push("Hello");
ids.push(8);

let arr: any[] = [true, 'dave', 999]; 

// tuple 
let person: [number, string, boolean] = [8, 'aaa',true]; 
// wrong: let person: [number, string, boolean] = [8, 'aaa',444]; 
//tuple array 
let employee: [string, number] [] = [['dave', 888], ['steve',777]]

//union 
let pid : number | string
pid = 'wahtever' 

//Enum 
enum Direction1 {
  left, 
  right, 
  up,
  down
}

console.log(Direction1.left)

enum Direction2 {
  left = 2, 
  right, 
  up,
  down
}

console.log(Direction2.left)
console.log(Direction2.up)

enum Direction3 {
  left = "a", 
  right ="b", 
  up ='c',
  down = "d"
}

console.log(Direction3.left)
console.log(Direction3.up)

// objects 
type User = {
  id: number, 
  name: string
}

const user: User = {
  id: 5, 
  name: 'john'
}

// Type assertion 
let cid : any = 'abc'
let customerId = cid as number; 
customerId = 5 ; 
// alternatively: let customerId = <number>cid

// using types in functions 
function addNum(x: number, y: number):number {
  return x + y 
}

console.log(addNum(5,6));

// void 
function log(message: string| number) : void {
  console.log(message)
}

//interfaces 

interface UserInterface {
  readonly id: number,  // can not change as it is read only property 
  name: string, 
  age? : number // optional 
}

const userInterface: UserInterface = {
  id: 5, 
  name: 'john'
} 

// userInterface.id = 8;  // cannot change as it is a read only property 


// objects can be used with primitives and it can be used with unions 
type Point = number | string 
const p1: Point = 5 

// wrong: interface Point2 = number | string 




// function +  interface 
// classes && classes + interfaces 
// data modifiers 
// implement interface in class 
// extending classes(subclasses) 
//generics 
// typescript with react 



