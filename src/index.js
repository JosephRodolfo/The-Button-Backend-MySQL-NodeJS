const { app } = require("../src/app");

const port = process.env.PORT || 2000;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


const io = require("socket.io")(server, {
  cors: {
    origin: process.env.ORIGIN,
  },
});

io.on("connection", (socket) => {
  let connectCounter = io.engine.clientsCount;
  socket.emit("message", generateMessage(connectCounter));
  socket.broadcast.emit("message", generateMessage(connectCounter));
  socket.on("disconnect", () => {
    let connectCounter = io.engine.clientsCount;
    socket.emit("message", generateMessage(connectCounter));
    socket.broadcast.emit("message", generateMessage(connectCounter));
  });
});

const generateMessage = (text) => {
  return {
    text,
  };
};
