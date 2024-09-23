<?php

use GraphQL\GraphQL;
use GraphQL\Type\Schema;
require("types.php");
require("query.php");

$schema = new Schema([
    "query" => $rootQuery,
    "mutation" => null
]);

try {
    $rawInput = file_get_contents('php://input');
    $data = json_decode($rawInput, true);
    $query = $data['query'];
    $result = GraphQL::executeQuery($schema, $query);
    
    header('Content-Type: application/json');
    echo json_encode($result->toArray());
} catch (\Exception $e) {
    $output = ['error' => $e->getMessage()];
    header('Content-Type: application/json');
    echo json_encode($output);
}

