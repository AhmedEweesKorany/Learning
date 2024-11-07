---
title:
---
---

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

---

### 1.2 TypeScript Functions:

- if the function does not return any thing so it has a type void and if you want to specify a returned type you can write
``` ts
let fun = ():string=>{
return "string returned !"
}
```
- if you did not specify returned type. TypeScript will automatically added type based on returned value and if there is no returned value it will add type void automatically.

---

### 1.3 Type Aliases in TypeScript

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

- you can also specify type of function parameters like 
``` ts
type fun = (a:string,b:number) => void // this mean it won't return anything

let newFun : fun = (st,nm)=>{
console.log("anything")
}

// you can add a choises for property in  type like 
type myType2 = {
username:string,
theme: "dark" | "light"
}

let user2:myType2 = {
username:"ahmeD",
theme:"dark"
}
```

---

### 1.4 TypeScript Interfaces:

In TypeScript, both `type` and `interface` allow you to define custom types. They have similarities but also key differences in terms of functionality and use cases. Here’s a comparison:

### 1. Basic Syntax

- **`interface`**: Primarily used for defining object shapes.
  
  ```typescript
  interface User {
      name: string;
      age: number;
  }
  ```

- **`type`**: Can define any type, including primitives, unions, and function signatures.
  
  ```typescript
  type User = {
      name: string;
      age: number;
  };
  ```

### 2. Extensibility

- **`interface`**: Interfaces are **extensible**, meaning they can be reopened and extended multiple times, even in different files.

  ```typescript
  interface User {
      name: string;
  }

  // Later in the code, you can add new properties to `User`
  interface User {
      age: number;
  }

  const user: User = { name: "Alice", age: 25 }; // Works fine
  ```

- **`type`**: Types are **not extensible** in the same way. Once defined, a type cannot be reopened and modified.

  ```typescript
  type User = {
      name: string;
  };

  // Trying to extend it later like this will cause an error
  // type User = {
  //     age: number;
  // };
  ```

### 3. Merging and Extending

- **Interfaces** support **declaration merging**. This allows multiple declarations of the same interface to be combined.
- **Types** support **intersection types** (using `&`) for combining multiple types.

#### Extending with `interface`

```typescript
interface Person {
    name: string;
}

interface User extends Person {
    age: number;
}

const user: User = { name: "Alice", age: 25 };
```

#### Extending with `type` (using intersections)

```typescript
type Person = {
    name: string;
};

type User = Person & {
    age: number;
};

const user: User = { name: "Alice", age: 25 };
```

### 4. Use with Unions and Intersections

- **`type`**: Types can define unions, intersections, and primitives, which interfaces cannot do directly.

  ```typescript
  type Status = "success" | "error" | "loading"; // Union type
  type StringOrNumber = string | number;         // Union type
  ```

- **`interface`**: Interfaces cannot represent union types on their own, so `type` is generally more flexible here.

### 5. Function and Tuple Types

- **`type`**: Often more flexible for defining complex types, such as function types or tuples.

  ```typescript
  type Callback = (data: string) => void;  // Function type
  type Point = [number, number];           // Tuple type
  ```

- **`interface`**: Can represent function types but is less commonly used for this purpose.

### When to Use Which?

- Use **`interface`** for defining the shape of objects, especially when you need extensibility or if the type might need declaration merging.
- Use **`type`** for creating unions, intersections, primitive types, and function types, or when you need more flexibility.

### Summary Table

| Feature                       | `interface`       | `type`               |
| ----------------------------- | ----------------- | -------------------- |
| Basic object shape definition | ✅                 | ✅                    |
| Declaration merging           | ✅                 | ❌                    |
| Extending (inheritance)       | ✅ (`extends`)     | ✅ (`&` intersection) |
| Union types                   | ❌                 | ✅                    |
| Intersection types            | ✅ (via `extends`) | ✅                    |
| Primitives (e.g., `string`)   | ❌                 | ✅                    |
| Function types                | ✅ (less common)   | ✅                    |
| Tuples                        | ❌                 | ✅                    |

### Conclusion

In general:
- Use **`interface`** for defining structured objects and when you need extensibility.
- Use **`type`** for more complex types, unions, intersections, and specific function types.