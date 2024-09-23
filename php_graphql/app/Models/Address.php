<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model{
    protected $table = 'addresses';
    public $timestamps = false;
    protected $fillable = ['description'];

    public function user(){ 
        return $this->belongsTo(User::class);
    }
}