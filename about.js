// function speak(){
//     let synth = window.speechSynthesis;
//     let voice =new SpeechSynthesisUtterance(`${textbox.value}`)
//     let sounds=synth.getVoices();
//     // voice.voice =sounds[25];
//     voice.pitch=1.5;
//     voice.rate=0.7;
//     synth.speak(voice);
// }
function speak() {
    var text = document.getElementById("textbox").value;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}