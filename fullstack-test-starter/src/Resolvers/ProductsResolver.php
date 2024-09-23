<?php 

namespace App\Resolvers;

use App\Model\Product;

class ProductsResolver{

    // code of retriveing data here 
    public static function getProducts():array{
        return Product::all();
    }

    // get single product by id
    public static function getProductById( string $id):array{
        $product = Product::where("id", "=", $id);
        return $product[0];
    }
}
