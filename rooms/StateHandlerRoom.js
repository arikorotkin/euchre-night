// const colyseus = require('colyseus')
// const colyseusSchema = require('@colyseus/schema')

// export class Player extends colyseusSchema.Schema {
//     constructor () {
//         super()
//         this.cards = []
//     }
// }


// export class State extends colyseusSchema.Schema {
//     constructor () {
//         super()
//         this.players = new colyseusSchema.MapSchema<Player>()
//     }

//     createPlayer (id) {
//         this.players[id] = new Player()
//     }

//     layCard (playerId, cardId) {
//         this.players[playerId].cards.filter(card => card.id !== cardId)
//     }
// }

// export class StateHandlerRoom extends colyseus.Room<State> {
//     maxClients = 4

    
// }