const router = require('express').Router()
const {Card} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const cards = await Card.findAll()
        res.json(cards)
    } catch (err) {
        next(err)
    }
})

router.get('/three-player', async (req, res, next) => {
    try {
        const cards = await Card.findAll({
            where: {
                threePlayer: true
            }
        })
        res.json(cards)
    } catch (err) {
        next(err)
    }
})