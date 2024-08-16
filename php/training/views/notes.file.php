<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-100">

<head>
<?php require "partials/links.php"; ?>


</head>

<body class="h-full">

<div class="min-h-full">
<?php require "partials/nav.php"; ?>


  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">All Notes </h1>

    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Your content -->

<h1 class="my-10">    Your notes is --
</h1>    <?php foreach ($notes as $note) {
        $note['body'] = htmlspecialchars($note['body']);
        # code...
        echo "<a href='/note?id={$note['id']}' class='text-blue-500 hover:underline'><li class='text-2xl'>$note[body]</li></a>";
    } ?>
    <div class="mt-10">
    <a href="notes-create" class="text-white bg-green-400 p-4 ">Create A New Note</a>
    </div>
    </div>
  </main>
</div>

</html>
