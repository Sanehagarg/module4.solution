(function () {
    var names = ["Saneha", "John", "Nishika", "James", "Prisha", "Franklin", "Lora", "Preeti", "Lavana", "Jaskirat"];
    for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
    jSpeaker(names[i]);
    } else {
    speaker(names[i]);
    }
    }
})();
