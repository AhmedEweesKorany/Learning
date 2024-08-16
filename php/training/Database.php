<?php

class Database {
    private $pdo;

    public function __construct($config, $username = "root", $password = null) {

        // Constructing the DSN string manually for better control
        $dsn = "mysql:host=" . $config['host'] . ";dbname=" . $config['dbname'] . ";charset=" . ($config['charset'] ?? 'utf8');

        try {
            $this->pdo = new PDO($dsn, $username, $password, [
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            ]);
        } catch (PDOException $e) {
            // Handle connection errors
            die("Database connection failed: " . $e->getMessage());
        }
    }

    public $statement;
    public function query($query,$params=[]) {
        $this->statement = $this->pdo->prepare($query);
        $this->statement->execute($params);
        return $this;
    } 
    public function fetchOrAbort($userID){
        $result = $this->statement->fetch();
        if (!$result) {
            abort(Response::NOT_FOUND);
        }elseif($result['user_id'] !== $userID){
            abort(Response::FORBIDDEN);
        }
        return $result;
    }

    public function fetchAllOrAbort(){
        $result =  $this->statement->fetchAll();
        if (!$result) {
            abort(Response::NOT_FOUND);
        }

        return $result;
    }
}
