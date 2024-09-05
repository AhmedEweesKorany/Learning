<?php 

require_once 'User.php';
require_once 'Employee.php';

$user = new User ;

var_dump($user->getProps());

$employee = new Employee;
var_dump($employee);

// var_dump($user->getName());

// echo $user->setName("emad");

// $user->name;
// echo $user->name;

// var_dump($user->dd());


## ====Abstraction ==== //


// interface
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


// abstract class 
## you can not make instance from absract class
## you can add props and methods inside abstracct class
## you can add abstract function in side abstract class to guide childs whcih method should implement (abstract function in abstract class is mostly like interface)

abstract class Polygon{
    public int $sides;
    public bool $is3D;

    abstract public function calcArea();
}


class Square extends Polygon{ // here Polygon appears as square ====> polymorphism
    public function calcArea() // here calc area appears as area of square ====> polymorphism
    {
        return "area calculated";

    }
}


$square = new Square;
$square->sides = 4;
echo $square->sides;