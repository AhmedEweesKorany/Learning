<?php 

namespace App\Resolvers;

use App\Model\Category;

class CategoryResolver{

    // code of retriveing data here 
    public static function getProducts():array{
        return Category::all();
    }

   
}
