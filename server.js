const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 3000

app.listen(3000, err => {
	if (err) return console.error(err)

	console.log(`Server listening on port ${PORT}.`)
})
