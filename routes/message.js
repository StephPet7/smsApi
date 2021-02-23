var express = require('express');
var messageRouter = express.Router();


const  {Message}  = require('../models')

//GET message listing. 
messageRouter.get('/', (req, res, next) => {
    Message.findAll()
    .then((messages) => {
        console.log(messages)
        res.json(messages)
      })
    .catch((err) => console.log(err))    
});

//Get a message by the id
messageRouter.get('/:id',(req,res, next)=>{
    Message.findOne({
        where: {
            id: req.params.id
        }
    }).then((message) =>{
        console.log(message)
        res.json(message)
    }).catch(() =>{
        if(err)
        {
            console.log(err)
            res.json({'status' : 'Failure'})
        }
    })
});

messageRouter.post('/', (req, res, next) => {
  
  body = req.body,

  Message.create({
    expediteur: body.expediteur,
    destinataire: body.destinataire,
    date: body.date,
    content: body.content
  }).then((message) => {
      res.json({"status" : "Message créé avec succés"})
    }).catch((err) => {
      console.log(err)
      res.json({"status": "Echec de création du message"})})  
});


messageRouter.put('/:id', (req, res) => {
	body = req.body
	Message.update(body, {where: {id: req.params.id}})
	.then(() => res.json({"status": "Message updated"}))
	.catch((err) => res.json({'status': 'error'}))
})

messageRouter.delete('/:id', (req, res) => {
	Message.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(() => res.json({"status": "Message deleted"}))
	.catch((err) => res.json({'status': 'error'}))
})

//Récuperer les messages envoyés par un utilisateur connaissant son id
messageRouter.get('/utilisateur/:id', (req, res, next) => {
  Message.findAll(
    {
      where : {expediteur : req.params.id}
    }
  ).then((messages) => {
      console.log(messages)
      res.json(messages)
    })
  .catch((err) => console.log(err))    
})

module.exports = messageRouter; 