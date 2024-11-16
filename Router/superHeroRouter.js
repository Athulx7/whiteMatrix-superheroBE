const express = require('express')

const superheroROuter = express.Router()

const superHeroController = require('../Controllers/admin/superHeroController')


superheroROuter.get('/shero/usedetails',superHeroController.getsuserdetails)
superheroROuter.get('/shero/grievancedetails',superHeroController.getGrievanceDetails)
superheroROuter.get('/shero/countgrei',superHeroController.getCountGrievance)

superheroROuter.get('/shero/selectGrie/:id',superHeroController.getSelectedDetails)






module.exports = superheroROuter