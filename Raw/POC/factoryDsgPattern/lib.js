// firstly the whole file which is required is executed
console.log("Hello from lib");
// module.exports -> node object that is exported to the file that require the current file
module.exports.fn = function fn(){
    console.log("Hello from module.exports fn");
}
console.log('Line inside lib');
console.log(module.exports);
console.log('***********************');