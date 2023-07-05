const { createServer } = require('http');

const server = createServer((req,res)=>{
    const {method} = req;

    if (method == "GET"){
        return res.end("GET")
    }
    else if (method == "POST"){
        return res.end("POST")
    }
    else if (method == "PUT"){
        return res.end("PUT")
    }
    else if (method == "DELETE"){
        return res.end("DELETE")
    }
    return res.end("Unknown method.")
})

const port = 3000;
const host = 'localhost';
server.listen(port,host,()=>{
    console.log("Server is running.");
});