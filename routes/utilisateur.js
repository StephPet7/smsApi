var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

const { User } = require('../models')

/* GET users listing. */
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
    User.findAll()
    .then((user) => {
		res.json(user)
      })
    .catch((err) => console.log('erreur'))
});


router.post('/', function(req, res, next) {
	body = req.body
	var emailV = Math.floor(Math.random()*1000000 + 1000000)
	var phoneV = Math.floor(Math.random()*1000000 + 1000000)

	User.create({
		nom: body.nom,
		prenom: body.prenom,
		telephone: body.telephone,
		pays: body.pays,
		email: body.email,
		username: body.username,
		password: body.password,
		codeVerificationEmail: emailV,
		codeVerificationPhone: phoneV,
		emailVerified: false,
        phoneNumberisVerified: false,
        activated: false,
        API_KEY: false,
        API_LOGIN: false
	})
	.then(() => {
		res.locals.emailV = emailV
		res.locals.phoneV = phoneV
		next()
	})
	.catch(() => {
		if (err){
			console.log(err)
			res.json({"status": "Failure Creation"})
		}
	})
	
}, function (req, res, next) {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'franklinfrost14@gmail.com',
			pass: 'naruto555'
		}
	})

	var mailOptions = {
		from: 'franklinfrost14@gmail.com',
		to: 'franklinfrost14@gmail.com',
		subject: 'Email Verification : Message Plateforme',
		text: 'Verification code : ' + res.locals.emailV,
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error){
			console.log(error)
			res.json({'status': "Failure", "message": "User created but email not sent"})
		}
		else{
			console.log('Email sent' + info.response)
			res.json({"status": "User successfully created and email sent"})
		}
	})
}) 


router.put('/:id', (req, res) => {
	body = req.body
	User.update(body, {where: {id: req.params.id}})
	.then(() => res.json({"status": "User updated"}))
	.catch((err) => res.json({'status': 'error'}))
})

router.delete('/:id', (req, res) => {
	User.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(() => res.json({"status": "User deleted"}))
	.catch((err) => res.json({'status': 'error'}))
})

router.post('/authenticate', (req, res) => {
	body = req.body
	if (!body.username || !body.password){
		res.json({'status': "FAILED", 'message': 'verifiez le nom de vos champs'})
	}
	User.findAll({ where: {username: body.username, password: body.password}})
	.then((user) => {
		res.json({"status": "SUCCESS", user})
	})
	.catch((err) => res.json({"status": 'FAILURE'}))
})

router.get('/activateEmail/:numero', (req, res, next) => {
	var numero = req.params.numero
	User.findOne({ where: {codeVerificationEmail: numero}})
	.then((user) => {
		user.emailVerified = true
		user.save()
		res.json({"status": "Email verified"})
	})
	.catch(() => res.json({'status': 'Verifier le numero d\'indification'}))
})


module.exports = router;