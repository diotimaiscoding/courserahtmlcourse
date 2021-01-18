(function(window){
    var speakword = "Hi"
    var hiSpeaker = {};
    hiSpeaker.speak = function(name){
        console.log(speakword+ " " + name)
    }
    window.hiSpeaker = hiSpeaker;
})(window);