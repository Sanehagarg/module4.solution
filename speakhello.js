// function which will be executed when the first letter of the name does not start with letter j

(function (window) {
    
    // variable which will store Hello
    var speakWord = "Hello";
    
    // function which will be taking name as the argument which do not start with the letter j in the paranthesis 
    //and will perform the whole functioning
    //and store the return value in variable speaker
    
    var helloSpeaker = function (name) {
        
        //printing statemet
    console.log(speakWord + " " + name);
    }
    
    window.helloSpeaker =helloSpeaker;
})(window);
