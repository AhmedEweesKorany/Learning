<?php 

namespace App\Database;

use PDO;

class Database {
    private $pdo;

    /**
     * Constructs a new Database instance with the provided configuration.
     *
     * @param array $config An associative array containing the database connection
     *                     details, including the host, database name, username, and
     *                     password.
     */
    public function __construct($config){
        $dsn = "mysql:host=" . $config['host'] . ";dbname=" . $config['dbname'];
        $this->pdo = new PDO($dsn, $config['username'], $config['password']);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }


    // get instance
    public static function getInstance($config){
        return new Database($config);
    }

    /**
     * Executes a SQL query and returns the results as an associative array.
     *
     * @param string $query The SQL query to execute.
     * @param array $params An optional array of parameters to bind to the query.
     * @return array An associative array containing the results of the query.
     */
    public function get($query, $params = []){
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Returns the underlying PDO connection object.
     *
     * @return PDO The PDO connection object.
     */
    public function getConnection(){
        return $this->pdo;
    }
/**
 * Inserts a new record into the database using the provided query and parameters.
 *
 * @param string $query The SQL query to execute.
 * @param array $params The parameters to bind to the query.
 * @return PDOStatement The executed statement object.
 */

    public function store($query, $params = []){
        $statement = $this->pdo->prepare($query);
        $statement->execute($params);
        return $statement;
    }
}