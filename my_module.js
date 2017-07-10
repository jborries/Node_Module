//Requiring a Node module allows you to use the module.exports object of another file!

module.exports = function(){ //this object constructor gets exported to the app.js file
//we can delete the function() and it's just an object we're exporting at that point.
    return {
        greet: function(){
            console.log("we are now using a module!");
        },
        add: function(num1, num2){
            console.log("the sum is:", num1 + num2);
        }
    }
}
