const server = require('./src/api/server')

const PORT = process.env.PORT || 3010;
server.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});