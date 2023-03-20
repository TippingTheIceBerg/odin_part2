// express will handle most of this.
let http = require("http");
let server = http.createServer((req,res)=>{
    // mime types or media types, the codes.
if(req.url === "/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Home Page </h1>")
    res.end()
}
else if(req.url === "/about"){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>About Page</h1>")
    res.end()
}
// 404 
else{
    res.writeHead(404,{"content-type":"text/html"})
    res.write("<h1>Page not fun...</h1>")
    res.end()
}


})
server.listen(5001)