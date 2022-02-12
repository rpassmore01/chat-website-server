const io = require("socket.io")(8000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  //Gets send message event
  socket.on("send-message", (obj, room) => {
    if (room === "") {
      //broadcasts to every client
      socket.broadcast.emit("receive-message", obj);
    } else {
      //broadcasts to certain room
      socket.broadcast.to(room).emit("receive-message", obj);
    }
  });

  socket.on("join-room", (room) => {
    socket.join(room);
  });
});
