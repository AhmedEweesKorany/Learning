<?php

function dd($vlaue){
    echo "<pre>";
    var_dump($vlaue);
    echo "</pre>";
    die();
}

function urlIs($value){
    return str_ends_with( $_SERVER['REQUEST_URI'],$value);
}
