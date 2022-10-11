import Script from "next/script"

export default function Voice(){
    return <>
        <p id="output"></p>
        <p id='test'></p>
        <p id="start">pesquise no google por voz</p>
        <Script
            id='voice'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
                    const test = document.querySelector('#test');
                    const startBtn = document.querySelector('#start');
                    const output = document.querySelector('#output');
                    const recognition = new webkitSpeechRecognition();
                    recognition.interimResults = true;
                    recognition.lang = "pt-BR";
                    recognition.continuous = true;
                    recognition.start();
                    // This event happens when you talk in the microphone
                    recognition.onresult = function(event) {
                        for (let i = event.resultIndex; i < event.results.length; i++) {
                            if (event.results[i].isFinal) {
                                // Here you can get the string of what you told
                                const content = event.results[i][0].transcript.trim();
                                output.textContent = 'voce falou: ' + content;
                                window.open('https://www.google.com/search?q='+content, '_blank')
                            }
                        }
                    };
            `}}
        />
    </>
}