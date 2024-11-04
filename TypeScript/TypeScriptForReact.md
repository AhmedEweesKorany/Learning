
# 1-TypeScript For Beginner:

### 1.1-TypeScript Types:

- if i defined Variable as a string like `let x = "string"` then i can not change the type of variable into any other type and if i intent to make that it will through and error ![[Pasted image 20241104192213.png]]
-  you can specify the type of your variable when you init like `let age:number` to accept only numbers otherwise throw an error . 
- you can add initial value to your variable like `let age:number = 13` to be your default value.
- if you created an array like `let arr = ["ah","me","ed"]` typescript will automatically indicates that is only a string array and if you tried to add a number as element like `arr.push(3)` it will throw an error  ![[Pasted image 20241104193031.png]]
- to specify the type of elements that allowed to add in your array you can write `let arr:string[]` this mean you can add only string in arr .
- if you want to specify more than allowed type you can write `let arr:(string|number)[]` to allow to add string or number values .
- same thing is in objects ... if you tried to change existed type of any property of object it will throw an error like 
``` Ts
let ob = {
usename : "ahmed",
age:18,
isAdmin:false
}

ob.username = 12 // will throw an error because you intend to change the tyoe
ob.phone = 01014955763 // will throw an error because phone prop is not defined unlike normal js which would create a new prop automatically
```
- if you defined a type for object properties and intend to use it . you should use all properties that you give a type like
``` ts
let ob = {
username:string,
age:number,
isAdmin:boolean
}

ob = {
username : "ahmed",
age:12
} // this will through an error because you did not use isAdmin property
```
- to specify that property is not required for example you can add ? after property name like `age?:number`
- if you did not specify any type when you init variable it will be `any` type by default and `any[]` to use any type in your array.
### 1.2 TypeScript Functions:

- if the function does not return any thing so it has a type void and if you want to specify a returned type you can write
``` ts
let fun = ():string=>{
return "string returned !"
}
```
- if you did not specify returned type. TypeScript will automatically added type based on returned value and if there is no returned value it will add type void automatically.

### Type Aliases in TypeScript

- you can define your own type in typescript like 
``` ts 
type UserType{
username:string;
age:number;
phone?:number
}

let fun = (user:UserType)=>{
retrun user.username // will return the user name of this user 
}
```