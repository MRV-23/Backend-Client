const { Mysql2 } = require('../services')

module.exports = class Client extends Mysql2 {

	// Constructor
	constructor() {
		const table = 'client'
	  	
	  	// Init super class
	  	super(table)

	  	// Init values
	  	this.datatable_col_names = []
	  	
	}
}