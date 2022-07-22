(function (window) {

    var byeGreeting = "Good Bye";
    var jSpeaker = function (name) {
    console.log(byeGreeting + " " + name);
    }
    window.jSpeaker = jSpeaker;
    })(window);
