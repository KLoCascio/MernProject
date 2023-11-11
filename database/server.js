const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3001

const activitiesController = require('./controllers/activitiesController')
const achievementsController = require('./controllers/achievementsController')
const attributesController = require('./controllers/attributesController')
const failuresController = require('./controllers/failuresController')
const usersController = require('./controllers/usersController')

// const currentActivitiesController = require('./controllers/currentActivitiesController')
// const previousActivitiesController = require('./controllers/previousActivitiesController')


app.use(methodOverride('_method'))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded( { extended: true}))


app.get('/user', usersController.getAllUsers)
app.post('/user', usersController.createUser)
app.delete('/user/:id', usersController.deleteUser)
app.put('/user/:id', usersController.updateUser)

app.get('/attributes', attributesController.getAllAttributes)
app.post('/attributes', attributesController.createAttribute)
app.delete('/attributes/:id', attributesController.deleteAttributes)
app.put('/attributes/:id', attributesController.updateAttributes)

app.get('/failures', failuresController.getAllFailures)
app.post('/failures', failuresController.createFailures)
app.delete('/failures/:id', failuresController.deleteFailures)
app.put('/failures/:id', failuresController.updateFailures)

app.get('/achievements', achievementsController.getAllAchievements)
app.post('/achievements', achievementsController.createAchievement)
app.delete('/achievements/:id', achievementsController.deleteAchievement)
app.put('/achievements/:id', achievementsController.updateAchievement)

app.get('/activities', activitiesController.getActivity)
app.post('/activities', activitiesController.createActivity)
app.delete('/activities/:id', activitiesController.deleteActivity)
app.put('/activities/:id', activitiesController.updateActivity)

// app.get('/current-activity', currentActivitiesController.getCurrentActivity)
// app.post('/current-activity', currentActivitiesController.createActivity)
// app.delete('/current-activity/:id', currentActivitiesController.deleteCurrentActivity)
// app.put('/current-activity/:id', currentActivitiesController.updateCurrentActivity)

// app.get('/previous-activities', previousActivitiesController.getPreviousActivity)
// app.post('/previous-activities', previousActivitiesController.createPreviousActivity)
// app.delete('/previous-activities/:id', previousActivitiesController.deletePreviousActivity)
// app.put('/previous-activities/:id', previousActivitiesController.updatePreviousActivity)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))