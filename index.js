const express = require('express');
const helmet = require('helmet');

const dishesRoute = require('./dishes/dishes_router');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/dishes', dishesRoute);

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`You One Bad Muther ___ Shut Yo Mouth!! Server open on${port}`)
);
