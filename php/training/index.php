<?php
require "helpers.php";

if(urlIs("/")){
    require "controllers/index.php";
}elseif (urlIs("about.php")) {
    # code...
    require "controllers/about.php";
}elseif (urlIs("contact.php")) {
    # code...
    require "controllers/contact.php";
}
