const express = require("express"),
  path = require("path"),
  route = require("./route.js"),
  app = express(),
  port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, "../build")));

route(app);

app.listen(port);

console.log(`Connected: Server is listening on port:${port}`);
