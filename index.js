const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// set static folder
app.use(express.static("public"));

// runs when client connects
io.on('connection', socket => {
    // welcome current user
    socket.emit('message', 'Welcome to Chat garne thau')

    
    // Broadcast when a user connects
    socket.broadcast.emit('message', 'A user has joined a chat');

    // run when a client disconnects
    socket.on('disconnect', ()=>{
        io.emit('message', 'A user has left the chat')
    })

    // listen to chatMessages
    socket.on('chatMessage', (msg)=>{
        io.emit('message',msg)

    })
})


const port = 5000 || process.env.port;
server.listen(port, ()=>{
    console.log(`server starting at server ${port}`);
});
