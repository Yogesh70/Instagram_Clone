
let expObj = require ('./lib.js');
// console.log(expObj.val);
// expObj.fn();
// console.log(expObj);

// let rVal = expObj.fn('user');
// rVal({ name: 'Yogesh' });

// create CreatePost fn
let rVal = expObj.fn('post');
// CreatePost fn call when req is received
rVal({
    author: "Yogesh",
    descp: "Hello from me"
});