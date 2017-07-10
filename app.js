//"Require" is essentially importing javascript from another file
var my_module = require('./my_module')();     //notice the extra invocation parentheses to be able to import a function! Without the (), you can just pull in an object
//Also, there is no .js at the end of the file. The require method automatically looks for JavaScript files so we don't need to include a file extension.
console.log(my_module);
my_module.greet();
my_module.add(5,6);

//By default, the require() method looks for the modules located in a folder called node_modules. To tell require() to look in the current directory that app.js is also in, we have to include "./" in front of the file path.
