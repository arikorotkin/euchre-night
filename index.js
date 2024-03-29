const http = require('http');
const express = require('express');
const cors = require('cors');
const colyseus = require('colyseus');
const monitor = require("@colyseus/monitor").monitor;
// const socialRoutes = require("@colyseus/social/express").default;

// const EuchreRoom = require('../rooms/MyRoom').EuchreRoom;

const port = process.env.PORT || 2567;
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const server = http.createServer(app);
const gameServer = new colyseus.Server({
  server: server,
});

// register your room handlers
// gameServer.define('euchre_room', EuchreRoom)
//   .enableRealtimeListing();

/**
 * Register @colyseus/social routes
 *
 * - uncomment if you want to use default authentication (https://docs.colyseus.io/authentication/)
 * - also uncomment the require statement
 */
// app.use("/", socialRoutes);

// register colyseus monitor AFTER registering your room handlers
app.use("/colyseus", monitor());
app.use('/api', require('./api'))
app.use(express.static('public'))

gameServer.listen(port);
console.log(`Listening on ws://localhost:${ port }`)
