// const colyseus = require('colyseus')
// const Room = colyseus.Room
// const { Game } = require('../db/models')
// const Sequelize = require('sequelize')
// const colyseusSchema = require('@colyseus/schema')
// const Schema = colyseusSchema.Schema
// const MapSchema = colyseusSchema.MapSchema

// export class Player extends Schema {
//     constructor () {
//         super()
//         this.cards = []
//     }
// }


// export class State extends Schema {
//     constructor () {
//         super()
//         this.players = new MapSchema<Player>()
//     }

//     createPlayer (id) {
//         this.players[id] = new Player()
//     }

//     layCard (playerId, cardId) {
//         this.players[playerId].cards.filter(card => card.id !== cardId)
//     }
// }

// exports.EuchreRoom = class extends Room<State> {
//   maxClients = 4

//   async onCreate (options) {

//     const game = await Game.create()

//     console.log('Euchre room created!', game)

//     this.onMessage("type", (client, data) => {
//       console.log(`Client ${client} has sent the following message: ${data}`)
//     });

//   }

//   onJoin (client, options) {
//   }

//   onLeave (client, consented) {
//   }

//   onDispose() {
//   }

// }
