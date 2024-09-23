<?php 
require_once 'Person.php';


class Employee extends Person{
    public int $age = 10;
}

class Student{
    
    return $this->age;
}

$employee = new Employee();
$student = new Student();

echo $employee->age;
echo $student->age;


