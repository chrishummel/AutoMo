var config = require('./config.js')
var axios = require('axios')


//WBABJ6326RJD32876
//1HGCM66536A059992

var helpers ={}

helpers.getVinInfo = function(vinObj) { 
	var VIN = vinObj.vinNum;
	var vinUrl = "https://api.edmunds.com/api/v1/vehicle/vin/" + VIN + "/configuration?api_key=" + config.API
	
	return axios.get(vinUrl)
		
}

helpers.getYearID = function(VIN) {
	var vinUrl = "https://api.edmunds.com/api/vehicle/v2/vins/" + VIN + "?fmt=json&api_key=" + config.API
	
	return axios.get(vinUrl)
		.then(function(resp){
			return resp.data.years[0].id
		})

}

helpers.getMaintenance = function(id) {

	var mainUrl = 'https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid=' 
								+ id + "&fmt=json&api_key=" + config.API

	return axios.get(mainUrl)
		.then(function(resp){
			return resp
		})
}

helpers.getStyleID = function(vin){
	var squishVIN = vin.substring(0,8) + vin.substring(9,11);

	var styleUrl = "https://api.edmunds.com/api/vehicle/v2/squishvins/" + squishVIN + "/?fmt=json&api_key=" + config.API
	console.log(styleUrl)
	return axios.get(styleUrl)
		.then(function(resp){
			console.log(resp)
		})


}



helpers.getEngineInfo = function(id) {
	var engineUrl = "https://api.edmunds.com/api/vehicle/v2/styles/" + id



}



module.exports = helpers