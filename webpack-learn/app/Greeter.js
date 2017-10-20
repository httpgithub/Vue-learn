// Greeter.js
/*
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
};*/
function greet(){
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
}
export {
    greet as greet
}
