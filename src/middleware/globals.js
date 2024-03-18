const { Response } = require('../services')
const { Validator } = require('../services/')

module.exports = async(req, res, next) => {

    //Set Response Class
    global.responsex = new Response()

    //Set Validator Class
    global.validator = new Validator()

    next()

}