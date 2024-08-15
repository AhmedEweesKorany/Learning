<?php
require "helpers.php";
// require "router.php";
require "Database.php";
// connect to database
$config = require "config.php";

$db  = new Database($config['database']);

$id=$_GET['id'];
$query = "select * from posts where id =?";
$posts = $db->query($query,[$id])->fetchAll();
dd($posts);
