<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    "/" => "controllers/index.php",
    "/index" => "controllers/index.php",
    "/about" => "controllers/about.php",
    "/contact" => "controllers/contact.php",
];

function abort($code){
    http_response_code($code);
    require "controllers/{$code}.php";
}


function routesToController($uri,$arr){
    if(array_key_exists($uri,$arr)){
        require $arr[$uri];
    }else{
        abort(404);
    }
}

// initalize routes with it's controller
routesToController($uri,$routes);