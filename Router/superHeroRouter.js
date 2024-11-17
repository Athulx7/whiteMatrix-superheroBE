const express = require('express')

const superheroROuter = express.Router()

const superHeroController = require('../Controllers/admin/superHeroController')
const superHeroSOlvedController = require('../Controllers/admin/superHeroSolvedController')


superheroROuter.get('/shero/usedetails',superHeroController.getsuserdetails)
superheroROuter.get('/shero/grievancedetails',superHeroController.getGrievanceDetails)
superheroROuter.get('/shero/countgrei',superHeroController.getCountGrievance)

superheroROuter.get('/shero/selectGrie/:id',superHeroController.getSelectedDetails)

superheroROuter.post('/shero/toSolvedGrievance/:id',superHeroController.addToSolvedGRrievance)

//solved controller

superheroROuter.get('/shero/getsolvedGrie',superHeroSOlvedController.getSolvedGrievance)
superheroROuter.get('/shero/selectSolved/:id',superHeroSOlvedController.getSolvedSelected)




module.exports = superheroROuter