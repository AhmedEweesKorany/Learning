<?php

use App\Models\Address;
use App\Models\User;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

$rootQuery = new ObjectType([
    'name' => 'rootQuery',
    'fields' => [

        // Fetch a single user by ID
        'user' => [
            'type' => $userType,  
            'args' => [
                'id' => Type::int()
            ],
            'resolve' => function($root, $args) {
                return json_decode(json_encode(User::find($args['id'])), true);
            }
        ],

        // Fetch all users
        'users' => [
            'type' => Type::listOf($userType),  // Return a list of users
            'resolve' => function() {
                return json_decode(json_encode(User::all()), true);  // Fetch and return all users as an array
            }
        ],

        // Fetch all addresses
        'addresses' => [
            'type' => Type::listOf($addressType),  // Return a list of addresses
            'resolve' => function() {
                return json_decode(json_encode(Address::all()), true);  // Fetch and return all addresses as an array
            }
        ],
            
        // Fetch addresses by user ID
        'addressByUser' => [
            'type' => Type::listOf($addressType), 
            'args' => [
                'userId' => Type::int()
            ],
            'resolve' => function($root, $args) {
                return json_decode(json_encode(Address::where('user_id', $args['userId'])->get()), true);
            }
        ],
    ]
]);
