var Turn = require("node-turn");
var server = new Turn({
  // set options
  authMech: "long-term",
  credentials: {
    username: "password",
  },
  listeningPort: process.env.PORT || 25436,
});
server.start();
