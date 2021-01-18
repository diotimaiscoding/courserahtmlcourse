(function(window){
    var speakword = "Goodbye"
    var byeSpeaker = {};
    byeSpeaker.speak = function(name){
        console.log(speakword+ " " + name)
    }
    window.byeSpeaker = byeSpeaker;
})(window);