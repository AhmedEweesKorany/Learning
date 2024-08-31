<?php
$config = require BASE_PATH . "config.php";
$db  = new Database($config['database']);
$curUserId = 3;
$note = $db->query("SELECT * FROM notes where  id = :id",["id"=>$_GET['id']])->fetchOrAbort($curUserId);

return view("notes/show.file.php",[
    'note' => $note
]);