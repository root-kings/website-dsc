const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3000
const DBPORT = process.env.MONGODB_URI
var app = express()

mongoose.connect(DBPORT, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(logger('dev'))
app.use(cors())

app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')

app.set('view engine', 'pug')

// ---

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/speakers', (req, res) => {
	res.render('speakers')
})

app.get('/events', (req, res) => {
	res.render('events')
})

app.get('/about', (req, res) => {
	res.render('about')
})

app.get('/schedule', (req, res) => {
	res.render('schedule')
})

// Certificates -----

const certificateController = require('./controllers/certificateController')

app.get('/certificates/:event', certificateController.certificates_get)

app.get('/certificates', (req, res) => res.redirect('/events'))

app.get('/certificate/:id', certificateController.certificate_get)

// 404 ---

app.use(function (req, res) {
	res.status(404)

	// respond with html page
	if (req.accepts('html')) {
		res.render('404', {
			url: req.url
		})
		return
	}

	// respond with json
	if (req.accepts('json')) {
		res.send({
			error: 'Not found'
		})
		return
	}

	// default to plain-text. send()
	res.type('txt').send('Not found')
})

// ---

app.listen(PORT, err => {
	if (err) return console.error(err)

	console.log(`Server listening on port ${PORT}.`)
})
