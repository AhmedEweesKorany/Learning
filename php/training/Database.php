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

    public function query($query,$params=[]) {
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);
        return $statement;
    }
}
