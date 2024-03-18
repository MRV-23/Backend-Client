module.exports = class Response {

    constructor() {
        this.response = {
            http: null,
            message: [],
            errors: [],
            data: null
        }

        this.file_class = '[services/Response]'
        console.log(`${this.file_class} constructor has been called`)
    }

    setStatus(code) {
        this.response.http = code
    }

    setData(data) {
        this.response.data = data
    }

    addError(code, detail = null) {

        this.response.errors.push({
            code: code,
            detail: detail
        })
    }

    sendResponse(req, res) {
        console.log(`Send Response for '${req.url}' => '%@'`, JSON.stringify(this.response))    

        res.setHeader('last-modified', new Date())
        res.status(this.response.http).send(this.response)
    }

}