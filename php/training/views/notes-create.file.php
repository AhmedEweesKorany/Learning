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
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Create A New Note </h1>

    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Your content -->

<h1 class="my-10">    Create Your Own Notes Now ! -- </h1>

    <div class="mt-10">
        <form action="notes-create" class="my-10" method="post">
            <textarea type="text" name="note" id="" class="bg-white w-full rounded-lg p-2"><?= $_POST['note'] ?? "" ?></textarea>
           <p class="text-red-500"> <?= $err['body'] ?? "" ?></p>
<p>
<button type="submit" class="text-white bg-green-400 p-4">Create Now</button>

</p>
        </form>
    </div>
    </div>
  </main>
</div>

</html>
