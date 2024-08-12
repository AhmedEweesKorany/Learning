<?php
require "helpers.php";
if(urlIs("/")|| urlIs("/index")){
    require "controllers/index.php";
}elseif(urlIs("/about")){
    require "controllers/about.php";
}elseif(urlIs("/contact")){
    require "controllers/contact.php";
}else{
    echo "Not Found";
}
