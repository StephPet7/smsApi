const express= require ('express');
var ListDiffusionRouter = express.Router();

const { ListDiffusion} = require('../models')

ListDiffusionRouter.get('/', (req, res, next) => {
    ListDiffusion.findAll()
    .then((ListDiffusion) => {
		res.json(ListDiffusion)
      })
    .catch((err) => console.log('erreur'))
});

ListDiffusionRouter.post('/', (req, res) => {
	body = req.body
	ListDiffusion.create({
		contact: body.contact,
		diffusion: body.diffusion
		
	})
	.then(() => {
		res.json({"status": "diffusion ListDiffusion successfully created"})

	})
	.catch(() => {
		if (err){
			console.log(err)
			res.json({"status": "Failure"})
		}
	})
	
}) 


ListDiffusionRouter.put('/:id', (req, res) => {
	body = req.body
	ListDiffusion.update(body, {where: {id: req.params.id}})
	.then(() => res.json({"status": "diffusion List updated"}))
	.catch((err) => res.json({'status': 'error'}))
})

ListDiffusionRouter.delete('/:id', (req, res) => {
	ListDiffusion.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(() => res.json({"status": "diffusion List  deleted"}))
	.catch((err) => res.json({'status': 'error'}))
})

module.exports = ListDiffusionRouter; 