const router = require('express').Router()
module.exports = router

router.use('/cards', require('./cards'))
router.use('/game', require('./game'))

router.use((req, res, next) => {
    const error = new Error('not found')
    error.status = 404
    next(error)
})