<?php 

namespace App\Model;


class Order extends Model{

    
    protected static string $table = 'orders';

    protected $fillable = [ 'details', 'status', 'total'];
    
}
