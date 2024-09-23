<?php 

namespace App\Model;

use App\Database\Database;

abstract class Model {
    
    protected static   Database $db;
    protected static string $table;

      /**
     * Fillable attributes for mass assignment
     * This will be overridden in child classes
     */
    protected $fillable = [];

    /**
     * Attributes for the model
     */
    protected static $attributes = [];


    public function __construct(array $attributes = [])
    {
        $this->fill($attributes);
    }

      // Static method to initialize the database
      public static function setDatabase(Database $database): void
      {
          self::$db = $database;
      }
      
// get
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

    public static function insert($data){
        $sql = "INSERT INTO " . static::$table . " (".implode(',', array_keys($data)).") VALUES (:".implode(',:', array_keys($data)).")";
        return static::$db->store($sql, $data);
    }


       /**
     * Fill the model with an array of attributes, respecting the fillable array.
     */
    public function fill(array $attributes)
    {
        foreach ($attributes as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $this->attributes[$key] = $value;
            }
        }
        return $this;
    }

    /**
     * Getter for attributes
     */
    public function getAttribute($key)
    {
        return $this->attributes[$key] ?? null;
    }

    /**
     * Setter for attributes (used for individual attribute assignment)
     */
    public function setAttribute($key, $value)
    {
        if (in_array($key, $this->fillable)) {
            $this->attributes[$key] = $value;
        }
        return $this;
    }

    /**
     * Save method (placeholder)
     */
    public function save()
    {
        // Simulate saving to the database
        $sql = "INSERT INTO " . static::$table . " (".implode(',', array_keys($this->attributes)).") VALUES (:".implode(',:', array_keys($this->attributes)).")";
        return static::$db->store($sql, $this->attributes);
    }

}