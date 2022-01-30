const http=require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);
server.listen(process.env.TODOLIST_APP_PORT);
server.on('listening', () => {
  const addr = server.address();
  console.log(`Server running on ${addr.address}${addr.port}`);
});