// function which will be executed when the firstLetter of the name is j 

(function (window) {

    // variable to store Good Bye
    var speakWord = "Good Bye";
    
    //object creation which is equal to a function having name in the paranthesis
    var byeSpeaker = function (name) {
        
        // printing statement
    console.log(byeGreeting + " " + name);
    }
    
    window.byeSpeaker = byeSpeaker;
    })(window);
