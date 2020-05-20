const router = require('express').Router()
const {Game, Team} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
    try {
        const game = await Game.create()
        res.json(game)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const game = await Game.findOne({
            where: {
                id: req.params.id
            },
            include: Team
        })
        res.json(game)
    } catch (err) {
        next(err)
    }
})