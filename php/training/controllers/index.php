
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

    $heading = "Home";



    // dd($_SERVER );

    require "views/index.file.php";
