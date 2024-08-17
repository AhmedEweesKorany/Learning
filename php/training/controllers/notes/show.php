<?php
$config = require "config.php";
$db  = new Database($config['database']);
$curUserId = 3;
$note = $db->query("SELECT * FROM notes where  id = :id",["id"=>$_GET['id']])->fetchOrAbort($curUserId);

require "views/notes/show.file.php";
