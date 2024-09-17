<?php 

namespace App\Model;

use App\Database\Database;

abstract class Model {
    
    protected $db;
    public string $table;
    public function __construct(Database $db)
    {
        $this->db = $db;
    }


    public static function all():array{
        $sql = "SELECT * FROM " . static::$table;
        return static::$db->get($sql);
    }


    // create where method

    public static function where($column , $operator = '=', $value):array{
        $sql = "SELECT * FROM " . static::$table . " WHERE " . $column . " $operator :value";
        return static::$db->get($sql, ['value' => $value]);
    }


    // get item by id using where method
 
    public static function find($id):array{
        return static::where("id", '=', $id);
    }

    // create insert method

    public static function insert($data):int{
        $sql = "INSERT INTO " . static::$table . " (".implode(',', array_keys($data)).") VALUES (:".implode(',:', array_keys($data)).")";
        return static::$db->insert($sql, $data);
    }

}