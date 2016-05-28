var express = require('express');
var helpers = require('./helpers.js')
var path = require('path');
var bodyParser = require('body-parser');
var url = require('url')
var dbhelpers = require('./dbhelpers');



var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../client'))


app.get("/vincarinfo", function(req, res){
	var url_parts = url.parse(req.url, true)
	var query = url_parts.query
	
	helpers.getVinInfo(query)  //query = {vinNum: &%^&$}
		.then(function(data){
			res.status(200)
			res.send(data)
		})
})

app.get("/maintenance", function(req,res){
	var url_parts = url.parse(req.url, true)
	var query = url_parts.query
	
	helpers.getYearID(query.vin)
		.then(function(data) {
			return helpers.getMaintenance(data)
		})
		.then(function(data){
			res.status(200)
			res.send(data)
		})
})

app.get("/engine", function(req,res){
	//console.log("in /engine")
	var url_parts = url.parse(req.url, true)
	var query = url_parts.query;
	helpers.getStyleID(query.vin)
		.then(function(data){
			return helpers.getEngineInfo(data)
		}).then(function(data){
			res.status(200)
			res.sedn(data)
		})


})

app.post('/signup',function(req,res){
	dbhelpers.addUser(req.body)
		.then(function(resp){
			res.status(200)
			res.send(resp)
		})
})

app.post('/signin',function(req,res){
	dbhelpers.findUser(req.body)
		.then(function(resp){
			return dbhelpers.comparePassword(resp, req.body)
		}).then(function(result){
			if (result) {
				res.status(200)
				res.send(result)
			} else {
				res.status(400)
				res.send(result)
			}
		})
})



port = process.env.PORT || 1337

app.listen(port)
console.log("listening on: ", port)