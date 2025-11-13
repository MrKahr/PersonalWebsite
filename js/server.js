// secure protocol is very nice to have but is strictly not required
const serverSettings = require("./configuration.js");
const fs = require("node:fs");
const server = require("node:https");


const webserver = server.createServer((req, res) => {
    console.log(`Requesting ${req.url}`);
    console.log(__dirname);
    // Get file location 
    // Read file 
    // Check whether file is present 
    // return response

    res.writeHead(200, "helloWorld!");
    res.end();
}

)

webserver.listen(8010, () => {
    console.log("server is listening!");
})