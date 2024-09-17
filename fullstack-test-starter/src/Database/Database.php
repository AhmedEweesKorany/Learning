<?php 

namespace App\Database;

use PDO;

class Database {
    private $pdo;

    public function __construct($config){
        $dsn = "mysql:host=" . $config['host'] . ";dbname=" . $config['dbname'];
        $this->pdo = new PDO($dsn, $config['username'], $config['password']);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function get($query, $params = []){
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getConnection(){
        return $this->pdo;
    }

    public function insert($query, $params = []){
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);
        return $statement;
    }
}