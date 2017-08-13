var socket = io();
var list=document.querySelector("#list");
var chatForm = document.querySelector("#chatForm");
var messagebody = document.querySelector("#message");
var sendLocation = document.querySelector('#sendLocation');

function goesToBottom() {
  var clientHeight=list.clientHeight;
  var scrollTop=list.scrollTop;
  var messageHeight=list.lastChild.scrollHeight;
  var totalHeight=list.scrollHeight;

  if (scrollTop+clientHeight+messageHeight>=totalHeight) {
    scroll(0,totalHeight);
  }
}

socket.on('connect', function(){
  console.log('connected to the server');
});

socket.on('greetMessage', function(message) {
  var l = document.createElement("li");
  l.textContent=`${message.from}: ${message.text}`;
  list.appendChild(l);
});

socket.on('disconnect', function(){
  console.log('disconnected from the server');
});

socket.on("createMessage", function (message) {
  var l = document.createElement("li");
  l.textContent=`${message.from}: ${message.text}`;
  list.appendChild(l);
  goesToBottom();
});

chatForm.addEventListener("submit", function(e){
  e.preventDefault();
  socket.emit("createMessage", {from: "User", text:messagebody.value});
  messagebody.value = '';

});
sendLocation.addEventListener('click', function(){
  navigator.getCurrentPosition(function(pos) {
    console.log(pos);
  })
});
