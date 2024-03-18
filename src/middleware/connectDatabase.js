const { Mysql2 } = require('../services')

module.exports = async(req, res, next) => {

    global.Mysqlx = new Mysql2()

    // Conect to Mysql
    const connect_mysql = await Mysqlx.connect()

    if(!connect_mysql) {
        responsex.setStatus(202)
        responsex.addError('cannot_connect_mysql_database')
        responsex.sendResponse(req, res)
        return
    }

    next()

}