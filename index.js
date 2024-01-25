const http=require('http');
// Define the request handler function
const requestHandler=(req,res)=>{
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200,{'content-Type':'text/plain'});
     // Send the response
    res.end('Hello World')
}
// Create an HTTP server and pass the request handler function
const server=http.createServer(requestHandler);
server.listen(3000,()=>{
    console.log('server started')
})