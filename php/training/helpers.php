<?php

function dd($vlaue){
    echo "<pre>";
    var_dump($vlaue);
    echo "</pre>";
    die();
}

function urlIs($value){
    return $_SERVER['REQUEST_URI'] === $value;
}
