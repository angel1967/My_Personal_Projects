//Employee Routes
const express = require('express')
var router = express()
const create = require('../controller/emp')
const view = require('../controller/emp')
const bodyparser = require('body-parser');
const update = require('../controller/emp')
const remove = require('../controller/emp')
router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)
router.put('/:id',update.update)
router.delete('/delete/:id',remove.remove)

module.exports = router