<?php
require "validator.php";
$config = require "config.php";
$db  = new Database($config['database']);
$curUserId = 3;

if($_POST){

$body = $_POST['note'];
// dd($body[0]);
$err = [];

if(!Validator::string($body)){
    $err['body']="Note is empty";
}elseif(!Validator::string($body,20,100)){
  strlen($body) > 100 ?  $err['body']="Note is too long (should be 100 char at most)" : $err['body']="Note is too short (should be 20 char at least)";
}

if(empty($err)){
    $db->query('INSERT INTO notes(body,user_id) VALUES(:body,:user_id)',[
        'body' => $body,
        'user_id' => $curUserId
    ]);
    header('location: /notes');
}
}
require "views/notes/create.file.php";
