//for interacting with file system, fs is used
const fs  = require('fs')

//in read file sync, first put the file path and then the encoding in which to read.
const readFileSync = fs.readFileSync('file name','utf8')

//inside writeFileSync(), first write the file to which you want to write(if not present by default
//writeFileSync will create one) and then write the message/filetext.
const writeFileSync = fs. writeFileSync()

//the above ones are for synchronous operations, while readFile() or write file() are 
//asynchronous.
const readFile = fs.readFile('path', 'utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(result)
    }
})