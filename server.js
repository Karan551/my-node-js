const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, "success",{"Content-Type":"text/html"});

    res.end("Hello node.js how are you I am fine and what about you.");
});


server.listen(8080, "127.0.0.1", () => {
    console.log("App listening on port:: 8080");
});