<?php
$config = require "config.php";
$db  = new Database($config['database']);

$id = $_GET['id'];
$notes = $db->query("SELECT * FROM notes where id = ?",[$id])->fetchAll();

require "views/notes.file.php";
