<?php
$config = require BASE_PATH.  "config.php";
$db  = new Database($config['database']);

$id = $_GET['id'];
$notes = $db->query("SELECT * FROM notes where user_id = 3")->fetchAllOrAbort();

if(!$notes){
    abort(404);
}
return view("notes/index.file.php",[
    'notes' => $notes
]);