const io = require("socket.io")(8000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-message", (obj) => {
    console.log(obj.message);
    socket.broadcast.emit("receive-message", obj);
  });
});
