(function () {
    // array of names which will be checked 
    
    var names = ["Saneha", "John", "Nishika", "James", "Prisha", "Franklin", "Lora", "Preeti", "Lavana", "Jaskirat"];
    
    //loop so that every name should be check upto the array (name) length
    for (var i = 0; i < names.length; i++) {
        
        //firstLetter is a variable which will store the first character of every name
    var firstLetter = names[i].charAt(0).toLowerCase();
        
        // if condition to check if the firstLetter stored is j or not 
        // if it is j then then it will print the if condition otherwise else condition will be executed
        // triple equals to sign will be used to check whether the given letter is of same type or not as told in the lecture
        
    if (firstLetter === 'j') {
    jSpeaker(names[i]);
    } else {
    speaker(names[i]);
    }
    }
})();
