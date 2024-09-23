<?php

use App\Models\Address;
use App\Models\User;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;


$userType = new ObjectType([
    'name' => 'User',
    'description' => 'A user',
    'fields' => function() use(&$addressType)  {
        return [
            'id' => Type::int(),
            "email" => Type::string(),
            "addresses" => [
                "type" => Type::listOf($addressType),
                "resolve" => function($root, $args) {
                    $userId = $root['id'];
                    $user = User::where('id', $userId)->with(['addresses'])->first();
                    
                    // Debugging: Check if user and addresses are loaded
                    if (!$user) {
                        throw new \Exception("User not found");
                    }
                    if (!$user->addresses) {
                        throw new \Exception("Addresses not found for user ID: $userId");
                    }

                    return $user->addresses->toArray();
                }
            ]
        ];
    } 
]);

$addressType = new ObjectType([
    'name' => 'Address',
    'description' => 'A user\'s address',
    'fields' => [
        'id' => Type::int(),
        "user_id" => Type::int(),
        "description" => Type::string(),
    ]
]);
