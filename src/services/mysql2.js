const validator = require('validator')
module.exports = class Mysql2 {
    
    // Constructor
    constructor(table) {
        this.mysql = require('mysql2/promise')
        console.log(this.table,'-----')
        
        let environment = process.env.STAGE

        this.connection = null
        this.host = environment == 'production' ? process.env.HOST : 'localhost'
        this.user = environment == 'production' ? process.env.USER : 'root'
        this.password = environment == 'production' ? process.env.PASSWORD : '123456789'
        this.database = environment == 'production' ? process.env.DATABASE : 'examen'

		this.table = table
		this.datatable_col_names = ''
        console.log(`${this.file_class} constructor has been called`)
    }


    // Connect to database
    async connect() {
        try {
            // Create the connection to database
            this.connection = await this.mysql.createConnection({
                host: this.host,
                user: this.user,
                password: this.password,
                database: this.database,
            });

            return this.connection
        } 
        catch (e) {
            return null
            console.log(e, 'e')
        }
        
    }

    async insert(data,table=this.table) {
		//let db = this.db
        this.connection = await this.connect()
		// Waiting promise
       
       
		const function_name = 'insert'

        try {
            let sql = `INSERT INTO ${table} (`
			let values = `VALUES (`
            
			for(const field in data) {
				if(data[field] !== null) {
					
					if(typeof data[field] === 'boolean') {
						data[field] = data[field] ? '1' : '0'
					}
					
					sql += `\`${field}\`,`
					values += typeof data[field] === 'number' ?  `${data[field]},` : `'${data[field]}',`
				}
				else {
					sql += `\`${field}\`,`
					values += `NULL,`
				}
			}
            
			sql = sql.substring(0, sql.length - 1)
			values = values.substring(0, values.length - 1)
			
			sql += `) ${values})`
			
			const result = await this.connection.query(sql)
            console.log('----',result[0].insertId)

            if (result[0].insertId > 0) {
                return result[0].insertId
            }else{
                return 0
            }
        } catch (error) {
            return 0
        }
	}
    async getClientByEmail(email) {

		
        this.connection = await this.connect()

        let sql = `
                SELECT * FROM ${this.table} 
                WHERE email = '${email}'
	        `
		
        console.log(sql)

        const results = await this.connection.query(sql)

        //return { result: results  }
        if(results === null) {
            return null
        }
		else if(results[0].length > 0) {
            return { result: results[0] }
		}
		else {
            return null
		}
	}
    async getClient() {
        
        console.log('deleteTodos',this.table)
		
        this.connection = await this.connect()

        let sql = `
                SELECT * FROM ${this.table} 
	        `
		
        console.log(sql)

        const results = await this.connection.query(sql)
        console.log('RESULT get',results)
        //return { result: results  }
        if(results === null) {
            return { result: null }
        }
		else if(results[0].length > 0) {
            return { result: results[0] }
		}
		else {
            return { result: null }
		}
	}
    async executeSLQ(sql) {
        try {
            console.log(sql, 'sql')

            const [results, fields] = await this.connection.query(sql)
            //console.log(results, 'results'); // results contains rows returned by server
            //console.log(fields, 'fields'); // fields contains extra meta data about results, if available

            return { 
                result: results 
            }
        } 
        catch (err) {
            console.log(err);
        }
    }
    
}