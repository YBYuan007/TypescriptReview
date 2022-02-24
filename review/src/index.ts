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

// use interface in the function 

interface mathFunc {
  (x: number, 
  y: number) : number 
}

const add: mathFunc = (x:number, y: number): number => x + y;  // create an arrow function 
const sub: mathFunc = (x:number, y: number): number => x - y; 


// wrong: const add: mathFunc = (x:number, y: string): number => x + y 



// classes && classes + interfaces 

//name has not initializer and is not assigned in the constructor; 
// constructor is a method, so classes can have properties, 
// they can also have methods which are just functions within the class 
// constructor will run whenever the class is or whenever an object is instantiated from that class 
class Person {
  id: number
  name: string 

  constructor() {
    console.log(123)
  }
}

const brad = new Person()
const mike = new Person() 

// ========================================================
class Person1 {
  id: number,
  name: string 

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name 
  }

  register() { // method 
    return `${this.name} is now registered`
  }
}

const frank = new Person1(5, 'frank'); 
frank.id = 8; 
const tina = new Person1(6,  'tina'); 
console.log(frank)
console.log(tina.register())

// property is private, or public , or protected 
// ========================================================

interface PersonInterface {
  id: number
  name: string 
  register(): string 
}

class Person3 implements PersonInterface {
  id: number 
  name: string 

  constructor (id: number, name: string) {
    this.id = id 
    this.name = name 
  }

  register () {
    return `aaa`
    // return 1
  }

}



// extending classes(subclasses) 

class Employee extends Person1 {
  position: string 

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position =  position 
  }
}

const emp = new Employee(3,'dav', 'CEO');
console.log(emp.register()) 


//generics - re-usable components , placeholders 
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])
let strArr = getArray<string>(['a','b','c','d'])

// numArr.push(strArr);
numArr.push(1);

// typescript with react 



