const {createReadStream} = require('fs');

//Inside the createReadStream, we have to put the file path from where we will read
//by default, the size of the chunk of data is 64kb. But we can modify it by using highWaterMark
//as parameter inside createReadStream
const stream = createReadStream('/file1.txt')

//The on method is used to register a listener for the data event of the stream. 
//The data event is emitted whenever a chunk of data is available to be read from the 
//stream. The listener is a callback function that receives the chunk of data (result) and logs it to the console. 
stream.on('data',(result)=>{
    console.log(result);
})

//for the error->
stream.on('error',(err)=>console.log(err));