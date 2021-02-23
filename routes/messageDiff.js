var express = require('express');
var messageDiffRouter = express.Router();

const { MessageDiffusion } = require('../models')

/* GET messageDiff listing. */
messageDiffRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });
  
  messageDiffRouter.get('/', (req, res, next) => {
      MessageDiffusion.findAll()
      .then((messageDiffusion) => {
          res.json(messageDiffusion)
        })
      .catch((err) => console.log('erreur'))
  });

//Get a message by the id
messageDiffRouter.get('/:id',(req,res, next)=>{
    MessageDiffusion.findOne({
        where: {
            id: req.params.id
        }
    }).then((messageDiffusion) =>{
        console.log(messageDiffusion)
        res.json(messageDiffusion)
    }).catch(() =>{
        if(err)
        {
            console.log(err)
            res.json({'status' : 'Failure'})
        }
    })
});

  messageDiffRouter.post('/', (req, res) => {
    delete req.body.id
	body = req.body
	MessageDiffusion.create({
		message: body.message,
        diffusion: body.diffusion
	})
	.then(() => {
		res.json({"status": "MessageDiff successfully created"})

	})
	.catch(() => {
		if (err){
			console.log(err)
			res.json({"status": "Failure"})
		}
	})
	
}) 


messageDiffRouter.put('/:id', (req, res) => {
	body = req.body
	MessageDiffusion.update(body, {where: {id: req.params.id}})
	.then(() => res.json({"status": "MessageDiff updated"}))
	.catch((err) => res.json({'status': 'error'}))
})

messageDiffRouter.delete('/:id', (req, res) => {
	MessageDiffusion.destroy({
		where: {
			id: req.params.id
		}
	})
	.then(() => res.json({"status": "MessageDiff deleted"}))
	.catch((err) => res.json({'status': 'error'}))
})

module.exports = messageDiffRouter;