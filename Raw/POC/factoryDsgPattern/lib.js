// firstly the whole file which is required is executed
// console.log("Hello from lib");

// module.exports -> node object that is exported to the file that require the current file

module.exports.fn = function createFactory(entity){
    console.log("Inside entity");
    console.log('Returning create ' + entity + ' fn');
    return function create(entityObj){
        console.log('Inside create entity');
        console.log('Created ' + entity + ' using ' + JSON.stringify(entityObj));
    }
}

// console.log('Line inside lib');
module.exports.val = 4;
// console.log(module.exports);
console.log('***********************');