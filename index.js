const express = require('express');
const helmet = require('helmet');

// const db = require();
const server = express();

server.use(helmet());
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`You One Bad Muther ___ Shut Yo Mouth!! Server open on${port}`)
);
