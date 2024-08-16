<?php
$config = require "config.php";
$db  = new Database($config['database']);
$curUserId = 3;

if($_POST){

$body = $_POST['note'];
// dd($body[0]);
$err = [];
if(empty($body)){
    $err['body']="Note is empty";
}elseif(strlen($body) > 1000){
    $err['body']="Note is too long";
}

if(empty($err)){
    $db->query('INSERT INTO notes(body,user_id) VALUES(:body,:user_id)',[
        'body' => $body,
        'user_id' => $curUserId
    ]);
    header('location: /notes');
}
}
require "views/notes-create.file.php";
