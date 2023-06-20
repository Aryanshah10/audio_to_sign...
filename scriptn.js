const click_to_convert =  document.getElementById("click_to_convert")
const convert_text =  document.getElementById("convert_text")


click_to_convert.addEventListener('click', function() {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

	
	
    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        convert_text.innerHTML = transcript;
        click_to_convert.src = './Resources/mute.png'
    })


    recognition.addEventListener('end', () => {
        if (convert_text.textContent.trim() === '') {
          convert_text.textContent = "No speech detected. Please try again.";
          click_to_convert.src = './Resources/mute.png'
        }})

    if (speech == true) {
        recognition.start();
        click_to_convert.src = './Resources/unmute.png'
    }


})
