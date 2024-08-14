<?php

class Database {
    private $pdo;
    public function __construct($config,$username="root",$password=""){

        $dsn = "mysql:".http_build_query($config,"",";");
        //code...
        $this->pdo = new PDO($dsn ,$username,$password,[
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    public function query($query) {

        $statement = $this->pdo->prepare($query);
        $statement->execute();
        return $statement;
    }
}
