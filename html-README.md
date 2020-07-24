### HTML Review

## Heading
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Review</title>
</head>
```

## Link Style Sheet To the <head>
```
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Review</title>
    <link rel="stylesheet" href="style.css">
</head>
```

## Link JavaScript File to HTML
```
<body>
    <h1>JavaScript Review</h1>
    <div class="container">

    </div>
    <script src="app.js"></script>
    <script src="problem.js"></script>
</body>
```

## Add Class Element
```
    <div class="container"></div>
```

## Add Id Element
```
    <div id="box"></div>
```

## Form

Use `action` connect to result html page
```
<form action="result.html" method="GET" enctype="multipart/form-data">
    <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name">
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>
```
Get values and names from `form`
```
new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name);
    console.log(value);
```
Display All values and names in result page
```
    let nameElement = document.createElement('p')
    let valueElement = document.createElement('p')

    nameElement.textContent = name
    valueElement.textContent = value
    console.log(nameElement, valueElement);

    let resultElement = document.createElement('p')
    resultElement.textContent = name + ' ' + value

    resultsDiv.appendChild(resultElement)
```