const { app } = require("../src/app");

const port = 2000;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let connectCounter = 0;

io.on("connection", (socket) => {


  socket.on("disconnect", (arg) => {
    console.log("user left");
    connectCounter--;
    socket.emit("message", generateMessage(connectCounter));
  });

  socket.on("connected", (arg) => {
    console.log("user joined");
    connectCounter++;
    socket.emit("message", generateMessage(connectCounter));
  });



  socket.on("disconnected", (arg) => {
    console.log("user left");
    connectCounter--;
    socket.emit("message", generateMessage(connectCounter));
  });

  socket.emit("message", generateMessage(connectCounter));

});

const generateMessage = (text) => {
  return {
    text,
  };
};
