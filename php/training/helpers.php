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

function view($path,$attributes = []){
    extract($attributes);
    require BASE_PATH . "views/{$path}";
}