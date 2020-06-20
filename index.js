const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const db = require('./db')()
const cors = require('cors')
const  { json, static, Router } = require('express')
require('dotenv').config()

global.db = db
global.router = Router()
global.express = app
global.io = io
global.middleware = require('./middlewares')

app.use(static('uploads'))
app.use(static('static'))
app.use(json())
app.use(cors({
  credentials: true,
  origin: true,
  optionsSuccessStatus: 200
}))

// io.on('connection', (socket) => {
//   socket.on('chat message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

require('./api')

http.listen(process.env.SERVER_PORT, () => {
  console.log(`listening on *:${process.env.SERVER_PORT}`);
})