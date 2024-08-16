<?php
$config = require "config.php";
$db  = new Database($config['database']);
$curUserId = 3;
$note = $db->query("SELECT * FROM notes where  id = :id",["id"=>$_GET['id']])->fetch();
// dd($note);
if(!$note){
    abort(Response::NOT_FOUND);
}
elseif($note['user_id'] != $curUserId){
    abort(Response::FORBIDDEN);
}
require "views/note.file.php";
