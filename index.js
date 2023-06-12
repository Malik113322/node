const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
      return  res.end(home);
    }
    
});

const PORT = process.env.PORT;

server.listen(PORT, hostname, () =>{
    console.log(`Server is working`)
});
