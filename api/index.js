const app = require('express')()
const bodyParser = require('body-parser');

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.token)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/send-mail', (req, res) => {

	let data = req.body;

	const msg = {
		to: data.to,
		from: process.env.from,
		subject: data.subject,
		text: data.text,
		html: data.html,
	}

	sgMail
		.send(msg)
		.then(() => {
			res.json({ error: 0});
		})
		.catch((error) => {
			res.json({ error: 1});
			console.log(error);
		})
})

module.exports = app;
