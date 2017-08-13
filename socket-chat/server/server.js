var express = require('express');
var socketIO=require('socket.io');
var http=require('http');
var path=require('path');

var publicPath=path.join(__dirname, '../public');
var port= process.env.PORT || 3000;
var app = express();
var server=http.createServer(app);
var io=socketIO(server);

io.on('connection', (socket)=>{
  socket.emit('greetMessage', {from:"Admin", text:"Welcome to Chatapp"});
  socket.broadcast.emit('greetMessage', {from:"Admin", text:"new user joined chat"})

  socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });

  socket.on("createMessage", (message)=>{
    io.emit('createMessage', message);
  });
});


app.use(express.static(publicPath));

server.listen(port, ()=>{
  console.log('server is running on 3000');
})
