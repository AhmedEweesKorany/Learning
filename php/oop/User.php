<?php 

class User{
    // properties and methods
    // method is like a normal function but inside the class
    // you can define type of your properties


    // php has 3 access modifires (public,private,protected)

    // private $name = 'ahmed'; // won't be access from anywhere else 
    // protected $name = 'ahmed'; // can be access by child and parent class only
    public ?string $name = null ; // can be accessed  from anywhere




    public function getName(){
        return $this->name;
    }
        
    public function setName(string $name){
        $this->name = $name;
        return $this->getName();
    }
}