const btn=document.querySelector('.talk');
const content=document.querySelector('.content');
const rcontent=document.querySelector('.rcontent');


//initiate speech regonition

const greetings = ['Im good','Doing good boy','leave me alone'];

const weather = ['Weather is fine ', 'You need a fun'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Voice is activated, you can use microphoneeeee');
};


recognition.onresult = function(event){
    const current =event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

//add button to listener
btn.addEventListener('click',() => {
    recognition.start();
});



var voices;    
window.speechSynthesis.onvoiceschanged = function() {
    voices=window.speechSynthesis.getVoices();
};

var audio = new Audio('song1.m4a');

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();


            //checked completed

            if(message.includes('how are you')) {

                const finalText = greetings[Math.floor(Math.random() * greetings.length)];
                speech.text = finalText;
                rcontent.textContent= finalText
            }

            //checked completed
            if(message.includes('open camera') ){
                speech.text='okay proceed';
                rcontent.textContent='okay proceed'
                window.open("camera.html");


            }
            //checked completed
            if(message.includes('open calculator')  ){
                speech.text='okay proceed';
                rcontent.textContent='okay proceed'
                window.open('Calculator:///'); 
                
               
            }
            
            //checked completed
            if(message.includes('hello') || message.includes('what is your name') ){
                speech.text='hello i am deeeevika ';
                rcontent.textContent='hello ,i am devika';
            }


            //checked completed
            if(message.includes('open maps') || message.includes('open map')  ){
                speech.text='okay proceed';
                rcontent.textContent='okay proceed'
               window.open('https://www.google.com/maps/@20.2260688,73.9471873,14z');
            }

            //checked completed
            if(message.includes( 'open weather')  || message.includes( 'open weather forecast') || message.includes( 'weather') ){
                
                window.open('https://weather.com/en-IN/weather/today/l/20.23,73.95?par=google&temp=c');
                
                speech.text=' okay proceed please enter your location in serach bar';
                rcontent.textContent='okay proceed ';
                
            }

            //checked completed
            if(message.includes('hello devika') || message.includes('devika') || message.includes('hi') ){
                speech.text='hello what i can do for you ';
                rcontent.textContent='hello what i can do for you ';
            }

            //checked completed
            if(message.includes('open Google') || message.includes('Google') ){
               
                window.open('https://www.google.co.in/?gfe_rd=cr&dcr=0&ei=rt7BWaPPHbDy8AeQvaegAw');
                speech.text='okay proceed';
                rcontent.textContent='okay proceed';
            }

            //checked completed
            if(message.includes('open YouTube') || message.includes('YouTube') ){
                window.open('https://www.youtube.com/');
                speech.text='okay proceed';
                rcontent.textContent='okay proceed';

               
            }

            //checked completed
            if(message.includes('open Gmail') || message.includes('Gmail') ){
                window.open('https://mail.google.com/');
                speech.text='okay proceed';
                rcontent.textContent='okay proceed';

               
            }
            if(message.includes('open audio') || message.includes('play song') || message.includes('play songs')){
               
                audio.play();
                speech.text='okay proceed';
                rcontent.textContent='okay proceed';
             }
             if(message.includes('close audio') || message.includes('close song') || message.includes('close songs') ){
               
                audio.pause();
                speech.text='okay proceed';
                rcontent.textContent='okay proceed';
               
             }
             if(message.includes('who is Siri')){
                 speech.text=' siri is a beautiful piece of technology , Siri is a digital personal assistant, integrated within Apple device operating systems, that enables Apple device users to get answers to questions and , honestly , siri is much advance than me .  ';
                 rcontent.textContent='Siri is a digital personal assistant of apple devices';
             }
            
             if(message.includes('who you are') || message.includes('who invented you'))  {
                 speech.text='I am devika , and i am digital personal assistant , invented by Rishikesh Bhusaaal';
                 rcontent.textContent='I am devika , and i am digital personal assistant , invented by Rishikesh Bhusal';
             }
             if(message.includes('who is Alexa')){
                 speech.text='Alexa is Amazon virtual assistant, like Siri for the iPhone, but Alexa is built into smart devices like the Amazon Echo and the Amazon Echo Show. ';
                 rcontent.textContent='Alexa is Amazon virtual assistant, like Siri for the iPhone, but Alexa is built into smart devices like the Amazon Echo and the Amazon Echo Show. ';
             }
             if(message.includes('open Amazon')){
                 window.open('https://www.amazon.in/');
                 speech.text='okay proceed';
                rcontent.textContent='okay proceed';
             }
             
           


              
            
               

    speech.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Zira Desktop - English (United States)'; })[0];

    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 5;

    

    window.speechSynthesis.speak(speech);
}
