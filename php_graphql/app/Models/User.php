<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model{
    protected $table = 'users';
    public $timestamps = false;
    protected $fillable = ['name',"email"];

    public function addresses(){
        return $this->hasMany(Address::class);
    }
}