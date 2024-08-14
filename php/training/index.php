<?php
require "helpers.php";
// require "router.php";
require "Database.php";
// connect to database
$config = require "config.php";

$db  = new Database($config['database']);
$posts = $db->query("select * from posts")->fetchAll();
dd($posts);
