const path = require('path')
const package = require('../../package.json')
module.exports = async(req, res, next) => {

    const view = path.resolve(__dirname, '../views/index')
    res.render(view, {
        version: package.version,
        customer: 'XTz'
    })
}