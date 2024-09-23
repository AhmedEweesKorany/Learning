<?php

namespace App\Controller;

use App\Model\Order;
use App\Resolvers\OrderResolver;
use App\Resolvers\ProductsResolver;
use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use RuntimeException;
use Throwable;


class GraphQL
{
    static public function handle()
    {
        // Ensure Types.php is properly required
        require_once __DIR__ . '/../Types/Types.php';

        try {
            // Ensure $productType is defined
            if (!isset($productType)) {
                throw new RuntimeException('Product type is not defined');
            }

            $queryType = new ObjectType([
                'name' => 'Query',
                'fields' => [
                    'Products' => [
                        'type' => Type::listOf($productType),
                        'resolve' => function ($rootValue, array $args) {
                            return ProductsResolver::getProducts();
                        },
                    ],

                    'Product' => [
                        'type' => $productType,
                        'args' => [
                            'id' => ['type' => Type::string()],
                        ],
                        'resolve' => function ($rootValue, array $args) {

                            $product = ProductsResolver::getProductById($args['id']);

                            return $product;
                        },
                    ],

                ],
            ]);

            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    'createOrder' => [
                        'type' => Type::string(),
                        'args' => [
                            'details' => Type::string(),
                            'status' => Type::string(),
                            'total' => Type::float(),
                        ],
                        'resolve' => function ($root, $args) {
                            return OrderResolver::createOrder($args);
                        },
                    ],
                ],
            ]);

            $schema = new Schema(
                (new SchemaConfig())
                    ->setQuery($queryType)
                    ->setMutation($mutationType)
            );

            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }

            $input = json_decode($rawInput, true);
            if ($input === null) {
                throw new RuntimeException('Invalid JSON input');
            }

            $query = $input['query'] ?? null;
            $variableValues = $input['variables'] ?? null;

            if ($query === null) {
                throw new RuntimeException('Query is missing from the input');
            }

            $result = GraphQLBase::executeQuery($schema, $query, null, null, $variableValues);
            $output = $result->toArray();
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        // Set the Content-Type header for JSON response
        header('Content-Type: application/json');
        return json_encode($output); // Ensure JSON response
    }
}
