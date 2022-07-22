(function () {
    // array of names which will be checked 
    
    var names = ["Yakkov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    //loop so that every name should be check upto the array (name) length
    for (var i = 0; i < names.length; i++) {
        
        //firstLetter is a variable which will store the first character of every name
    var firstLetter = names[i].charAt(0).toLowerCase();
        
        // if condition to check if the firstLetter stored is j or not 
        // if it is j then then it will print the if condition otherwise else condition will be executed
        // triple equals to sign will be used to check whether the given letter is of same type or not as told in the lecture
        
    if (firstLetter === 'j') {
    byeSpeaker(names[i]);
    } else {
    helloSpeaker(names[i]);
    }
    }
    
    // The output will be like this :
    
    /*
    Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
    */
})();
