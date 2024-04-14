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

const book=(o:object):void=>{}
book({obj:"война и мир"})
book({obj:"Tolstoy"})
book({obj:1869})


const me=(m:object):void=>{}
me({obj:"Markha"})
me({obj:"KHataeva"})
me({obj:16})


const created=(h:object|null):void=>{}
created({obj:1})


//any//
let favcolor:any="blue";
let s:[any,any,any]=["sa",23,true]

const nn=(a:any):void=>{
    console.log(a)
}


///type

type Person={
    name:string,
    age:number
}
type person={
    name:"lili",
    age:13
}



type product={
    name:string,
    price:number,
    inStock:boolean
}
type Product={
    name:"apple",
    price:25,
    inStock:true
}


type User={
    id:number,
    username:string,
    email:string
}

let user:User={
    id:12,
    username:"petrushkina",
    email:"swqsmd.com"
}


type Account={
    id:string,
    balance:number
}
type account={
    id:123,
    balance:123232
}

