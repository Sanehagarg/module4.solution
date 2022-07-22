// function which will be executed when the first letter of the name does not start with letter j

(function (window) {
    
    // variable which will store Hello
    var greeting = "Hello";
    
    // function which will be taking name as the argument which do not start with the letter j in the paranthesis 
    //and will perform the whole functioning
    //and store the return value in variable speaker
    
    var speaker = function (name) {
        
        //printing statemet
    console.log(greeting + " " + name);
    }
    
    window.speaker =speaker;
})(window);
