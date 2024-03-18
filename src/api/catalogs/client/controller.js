const client = async (req, res) => {

    try {
      
        const { Client } = require('../../../models')
        const mClient= new Client()

        let listClient = await mClient.getClient()

        responsex.setStatus(200)
        responsex.setData({
            ...listClient
        })
        responsex.sendResponse(req, res)
        return
    }
    catch (err) {
        console.error(`Error => ${err.stack} - ${err.name}`)
        throw new Error("failed_process_controller")
    }
}

const addClient = async (req, res) => {

    try {

        const name = validator.hasValue(req.body.name) && !validator.isEmptyString(req.body.name) ? req.body.name.trim() : null 
        const email = (validator.hasValue(req.body.email) && !validator.isEmptyString(req.body.email) && validator.isEmail(req.body.email) ) ? req.body.email.trim() : null
        const company = validator.hasValue(req.body.company) && !validator.isEmptyString(req.body.company) ? req.body.company.trim() : null 
        const note = validator.hasValue(req.body.note) && !validator.isEmptyString(req.body.note) ? req.body.note.trim() : null 
        let error_request_data = false

        if(name === null) {
            error_request_data = true
            responsex.addError('ERROR NAME')
        }
        if(email === null) {
            error_request_data = true
            responsex.addError('ERROR EMAIL')
        }
        if(company === null) {

            error_request_data = true
            responsex.addError('ERROR COMPANY')
        }
        
        if(error_request_data) {
            responsex.setStatus(202)
            responsex.sendResponse(req, res)
            return
        }

        const { Client } = require('../../../models')
        const mClient= new Client()
        let existEmail = await mClient.getClientByEmail(email)

        if(existEmail) {
            responsex.setStatus(202)
            responsex.addError('EROOR EMAIL EXIST')
            responsex.sendResponse(req, res)
            return
        }

        let addClient = await mClient.insert({name, email, company, note})
        
        if (addClient <= 0 ) {
            responsex.setStatus(202)
            responsex.addError('error_not_insert_client')
            responsex.sendResponse(req, res)
            return
        }
        

        responsex.setStatus(200)
        responsex.setData({
            created: true
        })
        responsex.sendResponse(req, res)
        return
    }
    catch (err) {
        console.error(`Error => ${err.stack} - ${err.name}`)
        throw new Error("failed_process_controller")
    }
}

module.exports = {
    client,
    addClient
}