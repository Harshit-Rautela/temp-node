const http = require('http')
//an example case
//here req is input request(ftrom client) and res is response output
const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Welcome')
    }
    //for all other url requests->
    res.end(
        `<h1>Oops</h1>`
    )
});

//the server will listen(or appear) on port 5000
server.listen(5000)