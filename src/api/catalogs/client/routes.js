const express = require('express')
const asyncHandler = require('express-async-handler')
const { client, addClient } = require('./controller')

const router = express.Router()

router.get("/catalogs/client/list", asyncHandler(client))
router.post("/catalogs/client/add", asyncHandler(addClient))
module.exports = router
