(function (window) {
    var greeting = "Hello";
    var speaker = function (name) {
    console.log(greeting + " " + name);
    }
    window.speaker =speaker;
})(window);
