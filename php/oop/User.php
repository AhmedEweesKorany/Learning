<?php 

class User{
    // properties and methods
    // method is like a normal function but inside the class
    // you can define type of your properties


    // php has 3 access modifires (public,private,protected)

    // private $name = 'ahmed'; // won't be access from anywhere else 
    // protected $name = 'ahmed'; // can be access by child and parent class only
    public static ?string $name = null ; // can be accessed  from anywhere




    public function getName(){
        return $this->name;
    }
        
    public function setName(string $name){
        $this->name = $name;
        return $this->getName();
    }

// self and static keyword

## we use self key word to deal with static

public function ins1(){
    return $this;
}

public function ins2(){
    return new self;
}
// static is a non-object
// we defined static to be for the whole class and can not be changed 
## ==== Static keyword usage ===
// 1- define a static property and methods
// 2- bind methods (late static binding)
// 3- to define a variable that keeps it's current value

public static function dd()  {
    return User::$name; 
}

}