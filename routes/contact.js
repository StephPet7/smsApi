var express = require('express');
var router = express.Router();

const {Contact} = require('../models');

router.get('/', (req, res, next) => {
  	Contact.findAll()
	  .then((contact) => {
        res.json(contact)
		})
	  .catch((err) => console.log('Error'))
});

//Get a contact by the id
router.get('/:id',(req,res, next)=>{
    Contact.findOne({
        where: {
            id: req.params.id
        }
    }).then((contact) =>{
        console.log(contact)
        res.json(contact)
    }).catch(() =>{
        if(err)
        {
            console.log(err)
            res.json({'status' : 'Failure'})
        }
    })
});


router.post('/',(req,res,next)=>{
    
    Contact.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        numero: req.body.numero,
        user: req.body.user
    })
    .then(()=>{
        res.json({'status':'Contact crée'})
    })
    .catch(()=>{
        if(err){
            console.log(err)
            res.json({'status':'Failure'})
        }
    })

});

router.put('/id',(req,res,next)=>{
    Contact.update(req.body,{where: {id: req.params.id}})
    .then(()=>res.json({'status':'Contact Actulisé'}))
    .catch((err)=> res.json({'status':'error'}))
});


router.delete('/id',(req,res,next)=>{
    Contact.destroy({
        where: {id: req.params.id}
    })
    .then(()=> res.json({'status':'Contact supprimé'}))
    .catch((err)=> res.json({'status':'error'}))
});

//Récuperer les contacts d'un utilisateur connaissant son id
router.get('/utilisateur/:id', (req, res, next) => {
    Contact.findAll(
      {
        where : {user : req.params.id}
      }
    ).then((contacts) => {
        console.log(contacts)
        res.json(contacts)
      })
    .catch((err) => console.log(err))    
  })

module.exports = router;
