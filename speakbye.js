// function which will be executed when the firstLetter of the name is j 

(function (window) {

    // variable to store Good Bye
    var byeGreeting = "Good Bye";
    
    //object creation which is equal to a function having name in the paranthesis
    var jSpeaker = function (name) {
        
        // printing statement
    console.log(byeGreeting + " " + name);
    }
    
    window.jSpeaker = jSpeaker;
    })(window);
