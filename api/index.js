const app = require('express')()

app.get('/api', (req, res) => {

	res.end(`Hello! Go to item`)
})

module.exports = app