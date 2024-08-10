<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $data =[
        [
            'name' => 'John Doe',
            'age' => 30,
            'city' => 'New York'
        ],
        [
            'name' => 'Jane Doe',
            'age' => 28,
            'city' => 'Los Angeles'
        ],
        [
            'name' => 'Alice Doe',
            'age' => 25,
            'city' => 'Chicago'
        ],
        [
            'name' => 'Bob Doe',
            'age' => 32,
            'city' => 'San Francisco'
            ]
        ];

        function filterData ($data,$fn){
            $filterdData = [];
            foreach($data as $item){
                if($fn($item)) {
                $filterdData[] = $item;
            }
        }

        return $filterdData;
    }

    foreach (filterData($data, function($item){
        return $item['age'] <= 30;
    }) as $item) {
        echo "<p>Name: ". $item['name']. ", Age: ". $item['age']. ", City: ". $item['city']. "</p>";
    }
    ?>

</html>
