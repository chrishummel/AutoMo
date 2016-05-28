var db = require("./db")


var dbhelpers = {};


dbhelpers.addUser = function(attrs) {
	return db('users').insert(attrs)
		.then(function(result){
			return result
		})
}

dbhelpers.findUser = function(attrs) {
	return db('users').where({username: attrs.username})
		.then(function(resp){
			return resp[0]
	})
}

dbhelpers.comparePassword = function(attrs, requestBod) {
	if (attrs && attrs.username && requestBod.username) {
		return Promise.resolve(attrs.username === requestBod.username)
	} else {
		return Promise.resolve(false)
	}
}





















module.exports = dbhelpers