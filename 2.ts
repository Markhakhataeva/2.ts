//array///


let number:number[]=[1,2,3,4,5]
let fruits:string[]=['apple','banana']
let a:[number,string,boolean]=[22,'fruits',true]


////tuple////


let person:[string,string,number]
person=['markha','khataeva',16]

let colors:[string,string];
colors=['blue','purple']



///never/////




const jjj=(hh):never=>{
    while(true){
        
    }
}


const message="hi";
const error=(msg:string):never=>{
    throw new Error(msg)
}



///object///

let book:string|number;
book="война и мир";
book="Tolstoy";
book=1869


let me:string|number;
me="Markha";
me="KHataeva";
me=16


const created=(h:object|null):void=>{}
created({obj:1})


//any//
let favcolor:any="blue";
let s:[any,any,any]=["sa",23,true]

const nn=(a:any):void=>{}


///type
type Person=string|number;
let Name:Person;
Name="Markha"
let age:Person;
age=16;


type product=string|number|boolean;
let namee:product;
namee="apple";
let price:product;
price=100;
let inStock:product;
inStock=true;



type User=number|string|string;
let id:User;
id=12;
let username:User;
username="sssir";
let email:User;
email="xxjq.com";



type Account=number|number;
let Id:Account;
Id=23;
let balance:Account;
balance=21313;



