<?php 

require_once 'User.php';
require_once 'Employee.php';

$user = new User ;

$employee = new Employee;
var_dump($employee);

// var_dump($user->getName());

// echo $user->setName("emad");

// $user->name;
// echo $user->name;

// var_dump($user->dd());


## ====Abstraction ==== //

interface Shape{
    // can not include properties
    // every method should be public 
    // methods can not have body
    // every one use this interface should implement his code structure and should include all interface method
    public function calcArea(int $width,int $height);
}

class Triangle implements Shape{    
    public function calcArea($width,$height)
    {
        return $width * $height * 0.5;

    }
}


class Rectangle implements Shape{
    public function calcArea(int $width, int $height)
    {
        return $width * $height;
    }
}