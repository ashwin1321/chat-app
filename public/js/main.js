const chatForm = document.getElementById('chat-form');

const socket = io();

// Message from server
socket.on('message', message => {
    console.log(message);
    outputMessage(msg)
});

// message submit 
chatForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    // get message text
    let msg = e.target.elements.msg.value;

    // Emit messageto server
    socket.emit('chatMessage',msg);
});

// Output message to DOM
function outputMessage(message){
    const div = document.createElement('div')
    div.classList.add('message');
    div.innerHTML = ` <p class ="meta"> ashwin <span> 9:12pm</span></p>
    <p class ="text">
    hello frand, chai peelo
    </p>`;

    document.querySelector('.chat-messages').appendChild(div)
}