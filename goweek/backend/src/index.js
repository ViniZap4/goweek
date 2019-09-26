const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require("mongoose");
const {mongourl} = require('./config/keys')

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(mongourl,{
  useNewUrlParser: true
});


app.use((req, res, next)=>{
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () =>{
  console.log("server started on port 3000 :)");
});
