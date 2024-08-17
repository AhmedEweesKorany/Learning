<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-100">

<head>
<?php require __DIR__ . "/../partials/links.php"; ?>


</head>

<body class="h-full">

<div class="min-h-full">
<?php require __DIR__ . "/../partials/nav.php"; ?>


  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Single Notes (<?php echo  htmlspecialchars($note['body']);
 ?>) </h1>

    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <!-- Your content -->

<h1 class="my-10">    Your notes is --
</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ad unde quidem doloribus. Ducimus reprehenderit amet architecto hic quas expedita?</p>
    <div class="mt-10">
    <a href="about.php" class="text-red-500 bg-blue-400 p-4 ">Go To About Page</a>

    </div>
    </div>
  </main>
</div>

</html>
