const path = require('path')

console.log(path.sep)
const pathJoin = path.join()
//inside path.join, if you input (for example) '/folder','subfold','text.js',\
//it will return '/folder/subfold/text.js (in the console).

//for absolute path, you can use .resolve() method. You have to provide __dirname too.