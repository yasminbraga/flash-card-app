const routes = require('express').Router()

const QuestionController = require('./controllers/QuestionController')

routes.post('/questions', QuestionController.store)


module.exports = routes