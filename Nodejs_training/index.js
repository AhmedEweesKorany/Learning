// creating a node js server 

const http = require("http")


const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js HTML Response</title>
    </head>
    <body>
      <h1>Welcome to our Node.js Server!</h1>
      <p>This is an HTML response from our server.</p>
    </body>
    </html>
  `;

  res.end(htmlContent);
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});


